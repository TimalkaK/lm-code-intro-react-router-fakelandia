export const ConfessionForm : React.FC = () => {

  const validate = () => {
    

  }


  return (
    <form>
      <label htmlFor='subject'>Subject:</label>
      <input type="text" name="subject" id="subject"></input><br/>
      <label htmlFor='reason'>Reason for contact:</label>
      <select id='reason' name='reason '> 
        <option value="talk">I just want to talk</option>
        <option value="confessing">Confessing to a misdemeanour</option>
      </select><br/>
      <textarea name="details" id="details" rows={4} cols={40}></textarea><br/>
      <button disabled={true}>Confess</button>

    </form>
)
}