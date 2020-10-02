
export interface Accordian{
    CategoyHeading: string;
    CategoyId: number
    CategoyText: string;
    ExtraSettings: Object;
    IsMandatory: boolean;
    Localization: "en";
    PluginList: PluginItem;
}

export interface PluginItem{
    BlockingEnabled: boolean;
    ComplianceType: string;
    ComplianceTypeID: number;
    PluginDomain: string;
    cName: string;
}

export interface ResponseModel{
     accordian: Array<Accordian>;
}
