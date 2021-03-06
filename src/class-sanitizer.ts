/**
 * @deprecated
 * This file is deprecated. Import from ./index.ts instead.
 */

import {Sanitizer} from "./Sanitizer";

export * from "./decorators";
export * from "./Sanitizer";
export * from "./SanitizerInterface";

const sanitizer = new Sanitizer();
export default sanitizer;

export function sanitize(object: any): void {
    return sanitizer.sanitize(object);
}

export function sanitizeAsync<T>(object: T): Promise<T> {
    return sanitizer.sanitizeAsync(object);
}
