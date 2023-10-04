import { useState, useEffect } from "react";
import { Validate } from "./validate";
import { SubmitResponse } from "./submitResponse";
import useMisdemeanours from "../../useMisdemeanours";
import { MisdemeanourKind } from "../../types/misdemeanours.types";

export const Confession = () => {

  const {misdemeanours} = useMisdemeanours();

  const [subject, setSubject] = useState("");
  const [reason, setReason] = useState("");
  const [details, setDetails] = useState("");
  const [disableButton, setDisableButton] = useState(true);
  const [showValidation, setValidation] = useState("To submit, make sure to write a subject and details.");
  const [submitResponse, setSubmitResponse] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) =>{
		let value = event.target.value;
    setReason(value);
	}

  useEffect(() => {  
    if(subject.length >= 2 && details.length >= 100 && details.length <= 1200){
      setDisableButton(false);
      setValidation("");
    }else {
      setDisableButton(true);

      if(subject.length === 0 && details.length === 0){
        setValidation("To submit, make sure to write a subject and details.");
      }else if (subject.length < 2){
        setValidation("Please write a subject of 2 or more characters.");
      }else if (details.length < 100 || details.length > 1200){
        setValidation("Please write details between 100 and 1200 characters.");
      }
    }
  }, [subject, details]);



  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const confession = {subject, reason, details};
    try{
        const postData = await fetch('http://localhost:8080/api/confess', {
          method: 'POST',
          headers: { "Content-Type": "application/json"},
          body: JSON.stringify(confession)
        })

        const response = await postData.json();

        if (response.success === false){
          setSubmitResponse("uh-oh, we could not submit this confession 😔")
        } else if (response.success === true && response.justTalked === false){
          setSubmitResponse(response.message + "✅");
          
          misdemeanours?.push(
            {citizenId: Math.floor((Math.random() * 500) + 1), 
              misdemeanour: confession.reason as MisdemeanourKind, 
              date: new Date().toLocaleDateString()});

          console.log("List with new confession: " + misdemeanours);
          
        }else{
          setSubmitResponse(response.message + " 😍");
        }
    }catch(error){
    console.log(error);
    }
  }

return(

<section className='confession'>
<p>It's very difficult to catch people committing misdemeanours so we appreciate it when citizens confess to us directly.</p>    
<p>However, if you are having a hard day and need to vent then you're welcome to contact us here too. Up to you!</p>

<form onSubmit={handleSubmit}>
      <label htmlFor='subject'>Subject:</label>
      <input type="text" name="subject" id="subject" value={subject} onChange={(e) => setSubject(e.target.value)}></input><br/>
      <label htmlFor='reason'>Reason for contact:</label>
      <select id='reason' name='reason ' value={reason} onChange={handleChange}> 
        <option value="just-talk">I just want to talk</option>
        <option value="rudeness">Confessing to mild public rudeness</option>
        <option value="vegetables">Confessing to not eating vegetables</option>
        <option value="lift">Confessing to speaking in a lift </option>
        <option value="united">Confessing to supporting manchester united</option>
      </select><br/>
      <textarea name="details" id="details" rows={4} cols={40} value={details} onChange={(e) => setDetails(e.target.value)}></textarea><br/>
      <Validate message={showValidation}/>
      <button disabled={disableButton}>Confess</button>     
</form>
  <SubmitResponse message={submitResponse} />

</section>
)
}