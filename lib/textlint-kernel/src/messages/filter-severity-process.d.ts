import { TextlintKernelConstructorOptions, TextlintMessage } from "../textlint-kernel-interface";
/**
 * Filter messages by their severity.
 * @param {TextlintMessage[]} messages
 * @returns {TextlintMessage[]} filtered messages
 */
export declare function filterWarningMessages(messages?: TextlintMessage[]): TextlintMessage[];
/**
 * Pass through all messages.
 * @param {TextlintMessage[]} messages
 * @returns {TextlintMessage[]}
 */
export declare function through<T>(messages?: T[]): T[];
/**
 * Create message filter by config.quiet.
 * @param {Config} config
 * @returns {Function} filter function for messages
 */
export default function createSeverityFilter(config: TextlintKernelConstructorOptions): (messages: TextlintMessage[]) => TextlintMessage[];
