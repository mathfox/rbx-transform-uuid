import ts from "typescript";
import { TransformState } from "./TransformState";
import { v4 as uuid } from "uuid"

export function visitUuidNodes(node: ts.Node, state: TransformState): ts.Node {
    const f = state.context.factory;

    if (!ts.isIdentifier(node)) return node;

    const gen = f.createStringLiteral(uuid());

    return [gen] as any;
}
