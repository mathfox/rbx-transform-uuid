import ts from "typescript";
import { TransformState } from "./TransformState";
import { visitUuidNodes } from "./visitUuidNodes";

export function visitNode(node: ts.Node, state: TransformState): any {
    for (const transformer of [visitUuidNodes]) {
        node = transformer(node, state);
    }

    return node
}
