"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.StyleGuideModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var style_guide_component_1 = require("./style-guide.component");
var forms_1 = require("@angular/forms");
var animations_1 = require("@angular/platform-browser/animations");
var http_1 = require("@angular/common/http");
var button_1 = require("primeng/button");
var inputtext_1 = require("primeng/inputtext");
var inputtextarea_1 = require("primeng/inputtextarea");
var inputnumber_1 = require("primeng/inputnumber");
var dropdown_1 = require("primeng/dropdown");
var primeng_1 = require("primeng/");
var calendar_1 = require("primeng/calendar");
var chips_1 = require("primeng/chips");
var autocomplete_1 = require("primeng/autocomplete");
var inputmask_1 = require("primeng/inputmask");
var checkbox_1 = require("primeng/checkbox");
var radiobutton_1 = require("primeng/radiobutton");
var table_1 = require("primeng/table");
var password_1 = require("primeng/password");
var inputswitch_1 = require("primeng/inputswitch");
var StyleGuideModule = /** @class */ (function () {
    function StyleGuideModule() {
    }
    StyleGuideModule = __decorate([
        core_1.NgModule({
            declarations: [style_guide_component_1.StyleGuideComponent],
            imports: [
                common_1.CommonModule,
                animations_1.BrowserAnimationsModule,
                button_1.ButtonModule,
                inputtext_1.InputTextModule,
                forms_1.FormsModule,
                inputnumber_1.InputNumberModule,
                inputtextarea_1.InputTextareaModule,
                dropdown_1.DropdownModule,
                primeng_1.MultiSelectModule,
                calendar_1.CalendarModule,
                chips_1.ChipsModule,
                autocomplete_1.AutoCompleteModule,
                inputmask_1.InputMaskModule,
                checkbox_1.CheckboxModule,
                radiobutton_1.RadioButtonModule,
                table_1.TableModule,
                password_1.PasswordModule,
                inputswitch_1.InputSwitchModule,
                http_1.HttpClientModule
            ]
        })
    ], StyleGuideModule);
    return StyleGuideModule;
}());
exports.StyleGuideModule = StyleGuideModule;
