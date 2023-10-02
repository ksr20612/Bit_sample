import { getHelloWorld } from "@ksr20612/my-scope.get-hello-world";

/**
 * renders a "hello world" message
 */

export function HelloWorld() {
    return <div>{getHelloWorld()}</div>;
}

