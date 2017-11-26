import SourceCode from "./source-code";
import { TxtNode } from "../textlint-kernel-interface";
import RuleError from "./rule-error";
import { ShouldIgnoreFunction } from "../task/textlint-core-task";
/**
 * This callback is displayed as a global member.
 * @callback ReportCallback
 * @param {ReportMessage} message
 */
/**
 * Rule context object is passed to each rule as `context`
 * @param {string} ruleId
 * @param {SourceCode} sourceCode
 * @param {ReportCallback} report
 * @param {Object|boolean|undefined} ruleOptions
 * @param {string} [configBaseDir]
 * @constructor
 */
export interface FilterRuleContextArgs {
    ruleId: string;
    ignoreReport: ShouldIgnoreFunction;
    sourceCode: SourceCode;
    configBaseDir?: string;
}
/**
 * Rule context object is passed to each rule as `context`
 * @param {string} ruleId
 * @param {SourceCode} sourceCode
 * @param {function(ShouldIgnoreArgs)} ignoreReport
 * @constructor
 */
export default class FilterRuleContext {
    private _ruleId;
    private _ignoreReport;
    private _sourceCode;
    private _configBaseDir?;
    constructor(args: FilterRuleContextArgs);
    /**
     * Rule id
     * @returns {string}
     */
    readonly id: string;
    /**
     * Node's type values
     * @type {TextLintNodeType}
     */
    readonly Syntax: {
        Document: string;
        Paragraph: string;
        BlockQuote: string;
        ListItem: string;
        List: string;
        Header: string;
        CodeBlock: string;
        HtmlBlock: string;
        ReferenceDef: string;
        HorizontalRule: string;
        Comment: string;
        Str: string;
        Break: string;
        Emphasis: string;
        Strong: string;
        Html: string;
        Link: string;
        Image: string;
        Code: string;
        Delete: string;
    };
    /**
     * CustomError object
     * @type {RuleError}
     */
    readonly RuleError: typeof RuleError;
    shouldIgnore: (range: [number, number], optional?: {}) => void;
    /**
     * get file path current processing.
     */
    getFilePath: () => string | undefined;
    /**
     * Gets the source code for the given node.
     * @param {TxtNode=} node The AST node to get the text for.
     * @param {int=} beforeCount The number of characters before the node to retrieve.
     * @param {int=} afterCount The number of characters after the node to retrieve.
     * @returns {string|null} The text representing the AST node.
     */
    getSource: (node: TxtNode, beforeCount?: number | undefined, afterCount?: number | undefined) => string | null;
    /**
     * get config base directory path
     * config base directory path often is the place of .textlintrc
     *
     * e.g.) /path/to/dir/.textlintrc
     * `getConfigBaseDir()` return `"/path/to/dir/"`.
     *
     * When using textlint as module, it is specified by `configBaseDir`
     * If not found the value, return undefined.
     *
     * You can use it for resolving relative path from config dir.
     * @returns {string|undefined}
     */
    getConfigBaseDir: () => string | undefined;
}
