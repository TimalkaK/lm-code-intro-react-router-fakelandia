import { useState, useEffect } from "react";

export const Confession = () => {

  const [subject, setSubject] = useState("");
  const [reason, setReason] = useState("");
  const [details, setDetails] = useState("");
  const [showButton, setShowButton] = useState(true);


  useEffect(() => {  
    if (subject.length > 0 && details.length > 0){
      setShowButton(false);
    }else{
      setShowButton(true);
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
      <button disabled={showButton}>Confess</button>
</form>

</section>
)
}