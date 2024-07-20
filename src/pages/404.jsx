
import Button from './../components/ui/Button';
const NotFound = () => {
    return (
        <div className="h-[600px] grid place-items-center">
            <div>
                <h2 style={{
                    color: "white",
                    webkitTextStroke: "2px #222",
                    textShadow: `-10px -0px 0 #222,1px -1px 0 #222,-1px 1px 0 #222,1px 1px 0 #222`
                }} className="text-8xl font-bold text-black/80">404 Not Found!</h2>
                <p className='text-center'>Sorry! We could not found the page you are looking for!</p>
                <Button title={"Back To Home"} className={"mx-auto block my-8"} />
            </div>
        </div>
    )
}

export default NotFound
