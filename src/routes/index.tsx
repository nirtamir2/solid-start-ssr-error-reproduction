import type { Component, JSX, JSXElement} from "solid-js";
import { createContext } from "solid-js";

const MyContext = createContext<boolean>(false);
export const MyProvider: Component<{
    children?: JSX.Element;
}> = (props) => {
    return <MyContext.Provider value>{props.children}</MyContext.Provider>;
};

export function MyComponent(props: { children: JSXElement }) {
    return <div>{props.children}</div>;
}

function Comparison(props: { a: JSX.Element; b: JSX.Element }) {
    return (
        <div>
            <div>{props.a}</div>
            <div>{props.b}</div>
        </div>
    );
}

export default function Home() {
    return (
        <MyProvider>
            <div>
                <p class="headline">
                    <MyComponent>MyComponent Children</MyComponent>
                </p>
                <Comparison a={<h2 class="item">a</h2>} b={<h2 class="item">a</h2>} />
                <p>End</p>
            </div>
        </MyProvider>
    );
}
