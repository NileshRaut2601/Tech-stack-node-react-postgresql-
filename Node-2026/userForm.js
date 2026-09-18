

function userForm(req,resp){
    resp.write(`
        <form action="submit" method="POST">
        <input type="text" name="name" placeholder="Enter your name">
        <input type="email" name="email" placeholder="Enter your email">
        <button>Submit</button>
        </form>
        `)
    }

module.exports=userForm;

