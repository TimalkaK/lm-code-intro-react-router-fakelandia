import { useState, useEffect } from "react";
import { Validate } from "./validate";

export const Confession = () => {

  const [subject, setSubject] = useState("");
  const [reason, setReason] = useState("");
  const [details, setDetails] = useState("");
  const [disableButton, setDisableButton] = useState(true);
  const [showValidation, setValidation] = useState("To submit, make sure to write a subject and details.");

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

return(

<section className='confession'>
<p>It's very difficult to catch people committing misdemeanours so we appreciate it when citizens confess to us directly.</p>    
<p>However, if you are having a hard day and need to vent then you're welcome to contact us here too. Up to you!</p>

<form>
      <label htmlFor='subject'>Subject:</label>
      <input type="text" name="subject" id="subject" value={subject}
        onChange={(e) => setSubject(e.target.value)}></input><br/>
      <label htmlFor='reason'>Reason for contact:</label>
      <select id='reason' name='reason ' value={reason}
        onChange={(e) => setReason(e.target.value)}> 
        <option value="talk">I just want to talk</option>
        <option value="confessing">Confessing to a misdemeanour</option>
      </select><br/>
      <textarea name="details" id="details" rows={4} cols={40} value={details}
        onChange={(e) => setDetails(e.target.value)}></textarea><br/>
      <Validate message={showValidation}/>
      <button disabled={disableButton}>Confess</button>
</form>

</section>
)
}