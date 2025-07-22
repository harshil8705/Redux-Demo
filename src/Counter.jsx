import { useDispatch, useSelector } from "react-redux";

const Counter = () => {

    const count = useSelector((state) => state.count.count)
    const dispatch = useDispatch();

    return(
        <>
            <div>
                <h2>Count in Counter Component : {count}</h2>
            </div>
        </>
    )

};

export default Counter;