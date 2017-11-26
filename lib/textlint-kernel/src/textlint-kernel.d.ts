import { TextlintFixResult, TextlintKernelConstructorOptions, TextlintKernelOptions, TextlintKernelProcessor, TextlintResult } from "./textlint-kernel-interface";
/**
 * TextlintKernel is core logic written by pure JavaScript.
 *
 * Pass
 *
 * - config
 * - plugins
 * - rules
 * - filterRules
 * - messageProcessor
 *
 */
export declare class TextlintKernel {
    private config;
    private messageProcessManager;
    /**
     * @param config
     */
    constructor(config?: TextlintKernelConstructorOptions);
    /**
     * lint text by registered rules.
     * The result contains target filePath and error messages.
     * @param {string} text
     * @param {Object} options linting options
     * @returns {Promise.<TextlintResult>}
     */
    lintText(text: string, options: TextlintKernelOptions): Promise<TextlintResult>;
    /**
     * fix texts and return fix result object
     * @param {string} text
     * @param {Object} options lint options
     * @returns {Promise.<TextlintFixResult>}
     */
    fixText(text: string, options: TextlintKernelOptions): Promise<TextlintFixResult>;
    /**
     * process text in parallel for Rules and return {Promise.<TextLintResult>}
     * In other word, parallel flow process.
     * @param {*} processor
     * @param {string} text
     * @param {Object} options
     * @returns {Promise.<TextlintResult>}
     * @private
     */
    _parallelProcess({processor, text, options}: {
        processor: TextlintKernelProcessor;
        text: string;
        options: TextlintKernelOptions;
    }): Promise<{
        messages: any[];
        filePath: string;
    }>;
    /**
     * process text in series for Rules and return {Promise.<TextlintFixResult>}
     * In other word, sequence flow process.
     * @param {*} processor
     * @param {string} text
     * @param {TextlintKernelOptions} options
     * @returns {Promise.<TextlintFixResult>}
     * @private
     */
    _sequenceProcess({processor, text, options}: {
        processor: TextlintKernelProcessor;
        text: string;
        options: TextlintKernelOptions;
    }): Promise<TextlintFixResult>;
}
