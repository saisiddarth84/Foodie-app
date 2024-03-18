const Contact = () => {
  return(
    <div>
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us page</h1>
      <form className="flex flex-col items-start m-4">
        <input type="text" className="border border-black p-2 m-2" placeholder="name" />
        <input type="text" className="border border-black p-2 m-2" placeholder="message" />
        <button className="bg-lime-200 p-2 m-2 rounded">Submit</button>
      </form>
    </div>
  )
}

export default Contact;