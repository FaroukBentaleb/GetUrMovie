import { Link } from "react-router";
export function NotFound(){
    return (
        <>
            <Link to={"/"}>
                <button>Back Home</button>
            </Link>
        </>
    );
}