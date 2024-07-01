/// <reference path="../../typings/thenable.d.ts" />

export function foo(): Thenable<string> {
	return Promise.resolve('foo');
}