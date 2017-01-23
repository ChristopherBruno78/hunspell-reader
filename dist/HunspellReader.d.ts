import { Aff, AffWord } from './aff';
import * as Rx from 'rxjs/Rx';
export interface WordInfo {
    word: string;
    rules: string;
}
export declare class HunspellReader {
    affFile: string;
    dicFile: string;
    aff: Promise<Aff>;
    constructor(affFile: string, dicFile: string);
    readDicEntries(aff: Aff): Rx.Observable<string>;
    readDicWords(): Rx.Observable<WordInfo>;
    readWordsEx(): Rx.Observable<AffWord>;
    readWords(): Rx.Observable<string>;
}
