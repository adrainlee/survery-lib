import { StylesManager } from "survey-core";

export function setMediaStyles(): void {
  StylesManager.Media = <{ [key: string]: { media: string, style: string } }>{
    ".sv_qstn fieldset .sv-q-col-1": {
      style: "width: 100%;",
      media: "@media only screen and (max-width: 480px)",
    },
    ".sv_qstn fieldset .sv-q-col-2": {
      style: "width: 100%;",
      media: "@media only screen and (max-width: 480px)",
    },
    ".sv_qstn fieldset .sv-q-col-3": {
      style: "width: 100%;",
      media: "@media only screen and (max-width: 480px)",
    },
    ".sv_qstn fieldset .sv-q-col-4": {
      style: "width: 100%;",
      media: "@media only screen and (max-width: 480px)",
    },
    ".sv_qstn fieldset .sv-q-col-5": {
      style: "width: 100%;",
      media: "@media only screen and (max-width: 480px)",
    },

    ".sv_main .sv_container .panel-body.card-block .sv_row .sv_qstn": {
      style: "display: block; width: 100% !important;",
      media: "@media (max-width: 600px)",
    },
    ".sv_main .sv_container .panel-body.card-block .sv_row .sv_qstn .title-left": {
      style: "float: none;",
      media: "@media (max-width: 600px)",
    },
    ".sv_main .sv_container .panel-body.card-block .sv_row .sv_qstn .sv_q_radiogroup_inline, .sv_main .sv_container .panel-body.card-block .sv_row .sv_qstn .sv_q_checkbox_inline, .sv_main .sv_container .panel-body.card-block .sv_row .sv_qstn .sv_q_imagepicker_inline": {
      style: "display: block;",
      media: "@media (max-width: 600px)",
    },
    ".sv_main .sv_container .panel-body.card-block .sv_row .sv_qstn table.table": {
      style: "display: block;",
      media: "@media (max-width: 600px)",
    },
    ".sv_main .sv_container .panel-body.card-block .sv_row .sv_qstn table.table thead": {
      style: "display: none;",
      media: "@media (max-width: 600px)",
    },
    ".sv_main .sv_container .panel-body.card-block .sv_row .sv_qstn table.table tbody, .sv_main .sv_container .panel-body.card-block .sv_row .sv_qstn table.table tr, .sv_main .sv_container .panel-body.card-block .sv_row .sv_qstn table.table td": {
      style: "display: block;",
      media: "@media (max-width: 600px)",
    },
    ".sv_main .sv_container .panel-body.card-block .sv_row .sv_qstn table.table:not(.sv_q_matrix) td:before": {
      style: "content: attr(data-responsive-title);",
      media: "@media (max-width: 600px)",
    },
    ".sv_main .sv_container .panel-body.card-block .sv_row .sv_qstn table.sv_q_matrix td:after": {
      style: "content: attr(data-responsive-title); padding-left: 1em",
      media: "@media (max-width: 600px)",
    },
    ".sv_main .sv_container .panel-body.card-block .sv_row .sv_qstn .radio label, .sv_main .sv_container .panel-body.card-block .sv_row .sv_qstn .checkbox label": {
      style: "line-height: 12px; vertical-align: top;",
      media: "@media (max-width: 600px)",
    },
    ".sv_qstn label.sv_q_m_label": {
      style: "display: inline;",
      media: "@media (max-width: 600px)",
    },
    ".sv_main .sv_custom_header": {
      style: "display: none;",
      media: "@media (max-width: 1300px)",
    },
    ".sv_main .sv_container .sv_header h3": {
      style: "font-size: 1.5em;",
      media: "@media (max-width: 1300px)",
    },
    ".sv_main .sv_container .sv_header h3 span": {
      style: "font-size: 0.75em;",
      media: "@media (max-width: 700px)",
    },

    ".sv_main.sv_bootstrap_css .sv-progress__text": {
      style: "margin-left: 8em;",
      media: "@media (min-width: 768px)",
    },

    ".sv_row": {
      style: " display: flex; flex-wrap: wrap;",
      media: "@supports (display: flex)",
    },

    ".sv-row > .sv-row__panel, .sv-row__question:not(:last-child)": {
      style: "float: left;",
      media:
      "@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none)",
    },

    "[dir='rtl'],[style*='direction:rtl'] .sv-row__question:not(:last-child)": {
      style: "float: right;",
      media:
      "@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none)",
    },

    ".sv-row > .sv-row__panel, .sv-row__question": {
      style: "width: 100% !important; padding-right: 0 !important;",
      media: "@media only screen and (max-width: 600px)",
    },
  };
}

export function setStyles(): void {
  StylesManager.Styles = <{ [key: string]: string }>{
    // ".sv_bootstrap_css": "position: relative; width: 100%; background-color: #f4f4f4",
    // ".sv_bootstrap_css .sv_custom_header": "position: absolute; width: 100%; height: 275px; background-color: #e7e7e7;",
    // ".sv_bootstrap_css .sv_container": "max-width: 80%; margin: auto; position: relative; color: #6d7072; padding: 0 1em;",
    // ".sv_bootstrap_css .panel-body": "background-color: white; padding: 1em 1em 5em 1em; border-top: 2px solid lightgray;",
    ".sv_main span": "word-break: break-word;",

    ".sv_main legend": "border: none; margin: 0;",

    ".sv_bootstrap_css .sv_qstn": "padding: 0.5em var(--sv-element-add-padding-right, 1em) 1.5em var(--sv-element-add-padding-left, 1em);",
    ".sv_bootstrap_css .sv_qcbc input[type=checkbox], .sv_bootstrap_css .sv_qcbc input[type=radio]": "vertical-align: middle; margin-top: -1px",
    ".sv_bootstrap_css .sv_qstn fieldset": "display: block;",
    ".sv_bootstrap_css .sv_qstn  .sv_q_checkbox_inline, .sv_bootstrap_css .sv_qstn .sv_q_radiogroup_inline": "display: inline-block;",

    ".sv_bootstrap_css .sv-paneldynamic__progress-container ": "position: relative; margin-right: 250px; margin-left: 40px; margin-top: 10px;",

    ".sv_main.sv_bootstrapmaterial_css .sv_q_radiogroup_control_label": "display: inline; position: static;",
    ".sv_main.sv_bootstrapmaterial_css .checkbox": "margin-top:10px;margin-bottom:10px;",

    ".sv_row": "clear: both; min-width:300px;",
    ".sv_row .sv_qstn": "float: left",
    ".sv_row .sv_qstn:last-child": "float: none",
    ".sv_qstn": "display: vertical-align: top; overflow: auto; min-width:300px;",
    ".sv_p_container": "display: vertical-align: top; min-width:300px;",

    ".sv_q_title .sv_question_icon": "float: right; margin-right: 1em;",
    ".sv_q_title .sv_question_icon::before": "content: ''; background-repeat: no-repeat; background-position: center; padding: 0.5em; display: inline-block; background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAxMCAxMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAgMTA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOiM2RDcwNzI7fQ0KPC9zdHlsZT4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMiwyIDAsNCA1LDkgMTAsNCA4LDIgNSw1ICIvPg0KPC9zdmc+DQo=);",
    ".sv_q_title .sv_question_icon.sv_expanded::before": "transform: rotate(180deg);",
    ".sv_qbln .checkbox-material": "margin-right: 3px;",
    ".sv_qcbx .checkbox-material": "margin-right: 5px;",
    ".sv_qcbx .checkbox label": "justify-content: left; display: inline-block;",
    ".sv_qstn .radio label": "justify-content: left; display: inline-block;",
    ".sv_qstn .sv_q_imgsel > label img": "pointer-events: none;",
    ".sv_qstn .sv_q_imgsel.sv_q_imagepicker_inline": "display: inline-block;",
    ".sv_qstn label.sv_q_m_label": "position: absolute; margin: 0; display: block; width: 100%;",
    ".sv_qstn td": "position: relative;",
    ".sv_q_mt": "table-layout: fixed;",
    ".sv_q_mt_label": "display: flex; align-items: center; font-weight: inherit;",
    ".sv_q_mt_title": "margin-right: 0.5em; width: 33%;",
    ".sv_q_mt_item": "flex: 1;",
    ".sv_q_mt_item_value": "float: left;",
    '[dir="rtl"] .sv_q_mt_item_value': "float: right;",
    ".sv_qstn.sv_qstn_left": "margin-top: 0.75em;",
    ".sv_qstn .title-left": "float: left; margin-right: 1em; max-width: 50%",
    '[dir="rtl"] .sv_qstn .title-left': "float: right; margin-left: 1em;",
    ".sv_qstn .content-left": "overflow: hidden",
    ".sv_q_radiogroup_inline .sv_q_radiogroup_other": "display: inline-block;",
    ".sv_q_checkbox_inline .sv_q_checkbox_other": "display: inline-block;",
    ".sv_q_checkbox_inline, .sv_q_radiogroup_inline, .sv_q_imagepicker_inline": "line-height: 2.5em;",
    ".form-inline .sv_q_checkbox_inline:not(:last-child)": "margin-right: 1em;",
    ".form-inline .sv_q_radiogroup_inline:not(:last-child)": "margin-right: 1em;",
    ".sv_imgsel .sv_q_imagepicker_inline:not(:last-child)": "margin-right: 1em;",
    ".sv_qstn fieldset": "border: none; margin: 0; padding: 0;",
    ".sv_qstn .sv_q_file_placeholder": "display:none",

    ".sv_p_title": "padding-left: 1em; padding-bottom: 0.3em;",
    ".sv_p_title_expandable, .sv_q_title_expandable": "cursor: pointer; position: relative; display: flex; align-items: center; padding-right: 24px;",
    ".sv_p_title_expandable::after, .sv_q_title_expandable::after": "content: \"\"; display: block;background-image: url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 21.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 10 10' style='enable-background:new 0 0 10 10;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23404040;%7D%0A%3C/style%3E%3Cpolygon class='st0' points='2,2 0,4 5,9 10,4 8,2 5,5 '/%3E%3C/svg%3E%0A\"); background-repeat: no-repeat; background-position: center center; background-size: 10px 12px; width: 24px; height: 24px; position: absolute; right: 0;",
    ".sv_p_title_expanded::after, .sv_q_title_expanded::after": "transform: rotate(180deg);",
    ".sv_p_title .sv_panel_icon": "float: right; margin-right: 1em;",
    ".sv_p_title .sv_panel_icon::before": "content: ''; background-repeat: no-repeat; background-position: center; padding: 0.5em; display: inline-block; background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAxMCAxMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAgMTA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOiM2RDcwNzI7fQ0KPC9zdHlsZT4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMiwyIDAsNCA1LDkgMTAsNCA4LDIgNSw1ICIvPg0KPC9zdmc+DQo=);",
    ".sv_p_title .sv_panel_icon.sv_expanded::before": "transform: rotate(180deg);",
    ".sv_p_footer": "padding-left: 1em; padding-bottom: 1em;padding-top: 1em;",

    ".sv_matrix_cell_detail_button": "position: relative",
    ".sv_detail_panel_icon": "display: block; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); width: 14px; height: 14px;",
    ".sv_detail_panel_icon::before": "content: ''; background-repeat: no-repeat; background-position: center; width: 14px; height: 14px; display: block; transform: rotate(270deg); background-image: url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 21.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 15 15' style='enable-background:new 0 0 15 15;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23FFFFFF;%7D%0A%3C/style%3E%3Cpolygon class='st0' points='14,5.5 12.6,4.1 7.5,9.1 2.4,4.1 1,5.5 7.5,12 '/%3E%3C/svg%3E%0A\");",
    ".sv_detail_panel_icon.sv_detail_expanded::before": "transform: rotate(0deg)",
    ".sv_matrix_empty_rows_section": "text-align: center; vertical-align: middle;",
    ".sv_matrix_empty_rows_text": "padding:20px",

    ".sv_q_file > input[type=file], .sv_q_file > button": "display: inline-block;",
    ".sv_q_file_preview": "display: inline-block; vertical-align: top; border: 1px solid lightgray; padding: 5px; margin-top: 10px;",
    ".sv_q_file_preview > a": "display: block; overflow: hidden; vertical-align: top; white-space: nowrap; text-overflow: ellipsis;",
    ".sv_q_file_remove_button": "line-height: normal;",
    ".sv_q_file_remove": "display: block; cursor: pointer;",

    ".sv_q_m_cell_text": "cursor: pointer;",

    ".sv_q_dd_other": "margin-top: 1em;",
    ".sv_q_dd_other input": "width: 100%;",
    ".sv_q_dd_clean-button": "margin: 0.15em 3em;",
    ".sv_q_dd_clean-button-svg": "width: 1em; height: 1em;",
    ".sv_q_dd_control": "display: flex; justify-content: space-between; appearance: none;",
    ".sv_q_dd_value": "width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; position: relative;",
    ".sv_q_dd_hint-prefix span": "white-space: pre;",
    ".sv_q_dd_hint-suffix": "display: flex;",
    ".sv_q_dd_root": "position: relative;",
    ".sv_q_dd_select_wrapper": "position: relative;",
    ".sv_q_dd_select_wrapper::after": "content: \"\"; display: block;background-image: url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 21.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 10 10' style='enable-background:new 0 0 10 10;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23404040;%7D%0A%3C/style%3E%3Cpolygon class='st0' points='2,2 0,4 5,9 10,4 8,2 5,5 '/%3E%3C/svg%3E%0A\"); background-repeat: no-repeat; background-position: center center; background-size: 10px 12px; width: 34px; height: 100%; position: absolute; inset-inline-end: 0; top: 0;",
    ".sv_q_dd_filter-string-input": "outline: none; border: none; background-color: transparent; position: absolute; inset-inline-start: 0; inset-block-start: 0; width: 100%; max-width: 100%; padding: 0;",

    ".sv_q_dropdown_clean-button": "margin: auto 2em;",
    ".sv_q_tagbox__placeholder": "position: absolute; top: 0; inset-inline-start: 1em; max-width: 100%; width: auto; height: 100%; text-align: start; cursor: text; pointer-events: none;",

    ".sv_qstn .sv-q-col-1, .sv-question .sv-q-col-1": "width: 100%; display: inline-block; padding-right: 1em; box-sizing: border-box; word-break: break-word;",
    ".sv_qstn .sv-q-col-2, .sv-question .sv-q-col-2": "width: calc(50% - 1em); display: inline-block; padding-right: 1em; box-sizing: border-box; word-break: break-word;",
    ".sv_qstn .sv-q-col-3, .sv-question .sv-q-col-3": "width: calc(33.33333% - 1em); display: inline-block; padding-right: 1em; box-sizing: border-box; word-break: break-word;",
    ".sv_qstn .sv-q-col-4, .sv-question .sv-q-col-4": "width: calc(25% - 1em); display: inline-block; padding-right: 1em; box-sizing: border-box; word-break: break-word;",
    ".sv_qstn .sv-q-col-5, .sv-question .sv-q-col-5": "width: calc(20% - 1em); display: inline-block; padding-right: 1em; box-sizing: border-box; word-break: break-word;",

    ".sv_qstn .sv-q-column-1, .sv-question .sv-q-column-1": "width: 100%; max-width: 100%; display: inline-block; padding-right: 1em; box-sizing: border-box; word-break: break-word;",
    ".sv_qstn .sv-q-column-2, .sv-question .sv-q-column-2": "max-width: 50%; display: inline-block; padding-right: 1em; box-sizing: border-box; word-break: break-word;",
    ".sv_qstn .sv-q-column-3, .sv-question .sv-q-column-3": "max-width: 33.33333%; display: inline-block; padding-right: 1em; box-sizing: border-box; word-break: break-word;",
    ".sv_qstn .sv-q-column-4, .sv-question .sv-q-column-4": "max-width: 25%; display: inline-block; padding-right: 1em; box-sizing: border-box; word-break: break-word;",
    ".sv_qstn .sv-q-column-5, .sv-question .sv-q-column-5": "max-width: 20%; display: inline-block; padding-right: 1em; box-sizing: border-box; word-break: break-word;",

    ".sv_qstn .sv_q_file_input": "color: transparent;",

    ".sv_qstn .sv_q_imgsel label > div": "overflow: hidden; white-space: nowrap; text-overflow: ellipsis; padding: 4px; border: 1px solid lightgray; border-radius: 4px;",
    ".sv_qstn .sv_q_imgsel label > div > img, .sv_qstn .sv_q_imgsel label > div > embed": "display: block;",

    ".sv_qstn table tr td .sv_q_m_cell_label": "position: absolute; left: 0; right: 0; top: 0; bottom: 0;",

    "f-panel": "padding: 0.5em 1em; display: inline-block; line-height: 2em;",

    ".sv_progress_bar > span": "white-space: nowrap;",

    //progress buttons
    ".sv_progress-buttons__container-center": "text-align: center;",
    ".sv_progress-buttons__container": "display: inline-block; font-size: 0; width: 100%; max-width: 1100px; white-space: nowrap; overflow: hidden;",
    ".sv_progress-buttons__image-button-left": "display: inline-block; vertical-align: top; margin-top: 22px; font-size: 14px; width: 16px; height: 16px; cursor: pointer; background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAxNiAxNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTYgMTY7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwb2x5Z29uIHBvaW50cz0iMTEsMTIgOSwxNCAzLDggOSwyIDExLDQgNyw4ICIvPg0KPC9zdmc+DQo=);",
    ".sv_progress-buttons__image-button-right": "display: inline-block; vertical-align: top; margin-top: 22px; font-size: 14px; width: 16px; height: 16px; cursor: pointer; background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAxNiAxNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTYgMTY7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwb2x5Z29uIHBvaW50cz0iNSw0IDcsMiAxMyw4IDcsMTQgNSwxMiA5LDggIi8+DQo8L3N2Zz4NCg==);",
    ".sv_progress-buttons__image-button--hidden": "visibility: hidden;",
    ".sv_progress-buttons__list-container": "max-width: calc(100% - 36px); display: inline-block; overflow: hidden;",
    ".sv_progress-buttons__list": "display: inline-block; width: max-content; padding-left: 28px; padding-right: 28px; margin-top: 14px; margin-bottom: 14px;",
    ".sv_progress-buttons__list li": "width: 138px; font-size: 14px; font-family: var(--font-family, $font-family); position: relative; text-align: center; vertical-align: top; display: inline-block;",
    ".sv_progress-buttons__list li:before": "width: 24px; height: 24px; content: ''; line-height: 30px; display: block; margin: 0 auto 10px auto; border: 3px solid; border-radius: 50%; box-sizing: content-box; cursor: pointer;",
    ".sv_progress-buttons__list li:after": "width: 73%; height: 3px; content: ''; position: absolute; top: 15px; left: -36.5%;",
    ".sv_progress-buttons__list li:first-child:after": "content: none;",
    ".sv_progress-buttons__list .sv_progress-buttons__page-title": "width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-weight: bold;",
    ".sv_progress-buttons__list .sv_progress-buttons__page-description": "width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;",
    ".sv_progress-buttons__list li.sv_progress-buttons__list-element--nonclickable:before": "cursor: not-allowed;",

    // ranking
    ".sv-ranking": "outline: none; user-select: none;",
    ".sv-ranking-item": "cursor: pointer; position: relative;",
    ".sv-ranking-item:focus .sv-ranking-item__icon--hover": "visibility: hidden;",
    ".sv-ranking-item:hover .sv-ranking-item__icon--hover": "visibility: visible;",
    ".sv-question--disabled .sv-ranking-item:hover .sv-ranking-item__icon--hover": "visibility: hidden;",
    ".sv-ranking-item:focus": "outline: none;",
    ".sv-ranking-item:focus .sv-ranking-item__icon--focus": "visibility: visible; top: 15px;",
    ".sv-ranking-item:focus .sv-ranking-item__index": "background: white; border: 2px solid var(--primary, #19b394);",
    ".sv-ranking-item__content": "display: flex; align-items: center; line-height: 1em; padding: 5px 0px; border-radius: 100px;",
    ".sv-ranking-item__icon-container": "left: 0;top: 0;bottom: 0;width: calc(3 * var(--base-unit, 8px)); flex-shrink: 0;",
    ".sv-ranking-item__icon": "visibility: hidden;top:20px; fill: var(--primary, #19b394); position: absolute;",
    ".sv-ranking-item__index": "display: flex; flex-shrink: 0; align-items: center; justify-content: center; background: var(--primary-light, rgba(25, 179, 148, 0.1)); color: var(--foreground); border-radius: 100%; border:2px solid transparent; width: 40px; height: 40px; line-height: 1em;",
    ".sv-ranking-item__text": "display: inline-block; overflow:hidden; text-overflow: ellipsis; white-space: nowrap; margin: 0 calc(2 * var(--base-unit, 8px));",
    ".sv-ranking-item__ghost": "display: none; background-color: var(--background-dim, #f3f3f3); border-radius: 100px;width: 200px;height: 55px;z-index: 1;position: absolute;left: 25px;",
    "[dir='rtl'] .sv-ranking-item__ghost": "left: initilal; right: 25px;",
    ".sv-ranking-item--ghost .sv-ranking-item__ghost": "display: block;",
    ".sv-ranking-item--ghost .sv-ranking-item__content": "visibility: hidden;",
    ".sv-ranking-item--drag .sv-ranking-item__content": "box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);border-radius: 100px;",
    ".sv-ranking--drag .sv-ranking-item:hover .sv-ranking-item__icon": "visibility: hidden;",
    ".sv-ranking-item--drag .sv-ranking-item__icon--hover": "visibility: visible;",
    ".sv-ranking--mobile .sv-ranking-item__icon--hover": "visibility:visible; fill:#9f9f9f;",
    ".sv-ranking--mobile.sv-ranking--drag .sv-ranking-item--ghost .sv-ranking-item__icon.sv-ranking-item__icon--hover": "visibility:hidden;",
    ".sv-ranking--mobile.sv-ranking-shortcut": "max-width: 80%;",
    ".sv-ranking--design-mode .sv-ranking-item:hover .sv-ranking-item__icon": "visibility: hidden;",
    ".sv-ranking--disabled": "opacity: 0.8;",
    ".sv-ranking-shortcut .sv-ranking-item__icon": "fill: var(--primary, #19b394); ",
    ".sv-ranking--drag-handle-area-icon .sv-ranking-item": "cursor: initial",
    ".sv-ranking--drag-handle-area-icon .sv-ranking-item__icon--hover": "cursor: pointer;",
    // EO ranking

    // drag drop
    ".sv-dragged-element-shortcut": "height: 24px; min-width: 100px; border-radius: 36px; background-color: white; padding: 16px; cursor: grabbing; position: absolute; z-index: 10000; box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1); font-family: var(--font-family, $font-family); font-size: 16px; padding-left: 20px;line-height: 24px;",

    ".sv-matrixdynamic__drag-icon": "padding-top:14px",
    ".sv-matrixdynamic__drag-icon:after": "content: ' '; display: block; height: 6px; width: 20px; border: 1px solid #e7e7e7; box-sizing: border-box; border-radius: 10px; cursor: move; margin-top: 12px;",

    ".sv-matrix-row--drag-drop-ghost-mod td": "background-color: #f3f3f3;",
    ".sv-matrix-row--drag-drop-ghost-mod td > *": "visibility: hidden",
    //eo drag-drop

    ".sv_qstn .sv_q_select_column": "display: inline-block; vertical-align: top; min-width: 10%;",

    ".sv_qstn .sv_q_select_column > *:not(.sv_technical)": "display: block;",

    ".sv_main .sv_container .sv_body .sv_p_root .sv_qstn .sv_q_select_column textarea": "margin-left: 0; padding-left: 0; line-height: initial;",
    ".sv_main .sv-hidden": "display: none !important;",
    ".sv_main .sv-visuallyhidden": "position: absolute; height: 1px !important; width: 1px !important; overflow: hidden; clip: rect(1px 1px 1px 1px); clip: rect(1px, 1px, 1px, 1px);",

    // paneldynamic progress
    ".sv_main .sv-progress": "height: 0.19em; background-color: $header-background-color; position: relative;",
    ".sv_main .sv-progress__bar": "background-color: $main-color; height: 100%; position: relative;",
    // EO paneldynamic progress

    // paneldynamic
    ".sv_main .sv-paneldynamic__progress-container": "position: relative; display: inline-block; width: calc(100% - 250px); margin-top: 20px;",
    ".sv_main .sv-paneldynamic__add-btn": "float: right;",
    ".sv_main .sv-paneldynamic__add-btn--list-mode": "float: none; margin-top: 0;",
    ".sv_main .sv-paneldynamic__remove-btn": "margin-top: 1.25em;",
    ".sv_main .sv-paneldynamic__remove-btn--right": "margin-top: 0; margin-left: 1.25em;",
    ".sv_main .sv-paneldynamic__prev-btn, .sv_main .sv-paneldynamic__next-btn": "box-sizing: border-box; display: inline-block; cursor: pointer; width: 0.7em; top: -0.28em; position: absolute;",
    ".sv_main .sv-paneldynamic__prev-btn svg, .sv_main .sv-paneldynamic__next-btn svg": "width: 0.7em; height: 0.7em; display: block;",
    ".sv_main .sv-paneldynamic__prev-btn": "left: -1.3em; transform: rotate(90deg);",
    ".sv_main .sv-paneldynamic__next-btn ": "right: -1.3em; transform: rotate(270deg);",
    ".sv_main .sv-paneldynamic__prev-btn.sv-paneldynamic__prev-btn--disabled, .sv_main .sv-paneldynamic__next-btn.sv-paneldynamic__next-btn--disabled": "cursor: auto;",
    ".sv_main .sv-paneldynamic__progress-text": "font-weight: bold; font-size: 0.87em; margin-top: 0.69em; margin-left: 4em",
    // EO paneldynamic
    //boolean
    ".sv_main .sv-boolean__switch": "display: inline-block; box-sizing: border-box; width: 63px; height: 24px; margin-right: 17px; margin-left: 21px; padding: 2px 3px; vertical-align: middle; border-radius: 12px; cursor: pointer;",
    ".sv_main .sv-boolean__slider": "display: inline-block; width: 20px; height: 20px; transition-duration: .4s; transition-property: margin-left; border: none; border-radius: 100%;",
    ".sv_main .sv-boolean__label": "vertical-align: middle; cursor: pointer;",
    ".sv_main .sv-boolean--indeterminate  .sv-boolean__slider": "margin-left: calc(50% - 10px);",
    ".sv_main .sv-boolean input:focus ~ .sv-boolean__switch": "outline-width: 1px; outline-style: solid; outline-offset: 1px;",
    ".sv_main .sv-boolean--checked  .sv-boolean__slider": "margin-left: calc(100% - 20px);",
    "[dir='rtl'] .sv-boolean__label ": "float: right;",
    "[dir='rtl'] .sv-boolean--indeterminate .sv-boolean__slider": "margin-right: calc(50% - 0.625em);",
    "[dir='rtl'] .sv-boolean--checked .sv-boolean__slider": "margin-right: calc(100% - 1.25em);",
    "[dir='rtl'] .sv-boolean__switch": "float: right;",
    "[style*='direction:rtl'] .sv-boolean__label ": "float: right;",
    "[style*='direction:rtl'] .sv-boolean--indeterminate .sv-boolean__slider": "margin-right: calc(50% - 0.625em);",
    "[style*='direction:rtl'] .sv-boolean--checked .sv-boolean__slider": "margin-right: calc(100% - 1.25em);",
    "[style*='direction:rtl'] .sv-boolean__switch": "float: right;",

    // EO boolean
    ".sv_main .sv_q_num": "",
    ".sv_main .sv_q_num + span": "",

    // SignaturePad
    ".sv_main .sjs_sp_container": "position: relative; box-sizing: content-box;",
    ".sv_main .sjs_sp_controls": "position: absolute; left: 0; bottom: 0;",
    ".sv_main .sjs_sp_controls > button": "user-select: none;",
    ".sv_main .sjs_sp_container>div>canvas:focus": "outline: none;",
    ".sv_main .sjs_sp_placeholder": "display: flex;  align-items: center; justify-content: center; position: absolute; z-index: 0; user-select: none; pointer-events: none; width: 100%; height: 100%;",

    // logo
    // ".sv_main .sv_header": "white-space: nowrap;",
    ".sv_main .sv_logo": "",
    ".sv_main .sv-logo--left": "display: inline-block; vertical-align: top; margin-right: 2em;",
    ".sv_main .sv-logo--right": "display: inline-block; vertical-align: top; margin-left: 2em; ",
    ".sv_main .sv-logo--top": "display: block; width: 100%; text-align: center;",
    ".sv_main .sv-logo--bottom": "display: block; width: 100%; text-align: center;",
    ".sv_main .sv_header__text": "display: inline-block; vertical-align: top; max-width: 100%; width: 100%",

    ".sv_main .sv-expand-action:before": "content: \"\"; display: inline-block; background-image: url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 21.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 10 10' style='enable-background:new 0 0 10 10;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23404040;%7D%0A%3C/style%3E%3Cpolygon class='st0' points='2,2 0,4 5,9 10,4 8,2 5,5 '/%3E%3C/svg%3E%0A\"); background-repeat: no-repeat; background-position: center center; height: 10px; width: 12px; margin: auto 8px;",

    ".sv_main .sv-expand-action--expanded:before": "transform: rotate(180deg);",

    ".sv_main .sv-action-bar": "display: flex; position: relative; align-items: center; margin-left: auto; padding: 0 0 0 16px; overflow: hidden; white-space: nowrap;",
    ".sv_main .sv-action-bar-separator": "display: inline-block; width: 1px; height: 24px; vertical-align: middle; margin-right: 16px; background-color: #d6d6d6;",
    ".sv_main .sv-action-bar-item": "-webkit-appearance: none; -moz-appearance: none; appearance: none; display: flex; height: 40px; padding: 8px; box-sizing: border-box; margin-right: 16px; border: none; border-radius: 2px; background-color: transparent; cursor: pointer; line-height: 24px; font-size: 16px; overflow-x: hidden; white-space: nowrap; min-width: auto; font-weight: normal",
    ".sv_main .sv-action-bar-item__title": "vertical-align: middle; white-space: nowrap;",
    ".sv_main .sv-action-bar-item__title--with-icon": "margin-left: 8px;",
    ".sv_main .sv-action__content": "display: flex; flex-direction: row; align-items: center;",
    ".sv_main .sv-action__content > *": "flex: 0 0 auto;",
    ".sv_main .sv-action--hidden": "width: 0px; height: 0px; overflow: hidden;",
    ".sv_main .sv-action-bar-item__icon svg": "display: block;",
    ".sv_main .sv-action-bar-item:active": "opacity: 0.5;",
    ".sv_main .sv-action-bar-item:focus": "outline: none;",

    ".sv_main .sv-title-actions": "display: flex; align-items: center; width: 100%;",
    ".sv_main .sv-title-actions__title": "flex-wrap: wrap; max-width: 90%; min-width: 50%;",
    ".sv_main .sv-title-actions__bar": "min-width: 56px;",
    ".sv_main .sv-title-actions .sv-title-actions__title": "min-width: unset; max-width: unset; flex-wrap: wrap; flex: 0 0 auto;",
    ".sv_main .sv-title-actions .sv-action-title-bar": "min-width: unset; flex: 1 1 auto; justify-content: flex-end;",
    ".sv_main .sv_matrix_cell_actions .sv-action-bar": "margin-left: 0; padding-left: 0;",
    ".sv_main .sv_p_wrapper_in_row": "display: flex; flex-direction: row; align-items: center;",
    ".sv_main  .sv_p_remove_btn_right": "margin-left: 1em;",
    //button-group
    ".sv_main .sv-button-group": "display: flex; align-items: center; flex-direction: row; font-size: 16px; height: 48px; overflow: auto;",
    ".sv_main .sv-button-group__item": "display: flex; box-sizing: border-box; flex-direction: row; justify-content: center; align-items: center; width: 100%; padding: 11px 16px; line-height: 24px; border-width: 1px; border-style: solid; outline: none; font-size: 16px; font-weight: 400; cursor: pointer; overflow: hidden;",
    ".sv_main .sv-button-group__item:not(:first-of-type)": "margin-left: -1px;",
    ".sv_main .sv-button-group__item-icon": "display: block; height: 24px;",
    ".sv_main .sv-button-group__item--selected": "font-weight: 600;",
    ".sv_main .sv-button-group__item-decorator": "display: flex; align-items: center; max-width: 100%;",
    ".sv_main  .sv-button-group__item-icon + .sv-button-group__item-caption": "margin-left: 8px",
    ".sv_main .sv-button-group__item-caption": "display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;",
    ".sv_main .sv-button-group__item--disabled": "color: cursor: default;",
    //eo button-group
    //popup
    "sv-popup": "display: block; position: absolute; z-index: -1;",
    ".sv-popup": "position: fixed; left: 0; top: 0; width: 100vw; height: 100vh; outline: none; z-index: 1500;",
    ".sv-popup.sv-dropdown-popup": "height: 0;",
    ".sv-popup__container": "box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1); position: absolute; padding: 0;",
    ".sv-popup__body-content": "background-color: var(--background, #fff); border-radius: calc(0.5 * var(--base-unit, 8px)); width: 100%; height: 100%; box-sizing: border-box; display: flex; flex-direction: column; max-height: 90vh; max-width: 100vw;",
    ".sv-popup--modal .sv-list__filter": "padding-top: 8px;",
    ".sv-popup--modal .sv-list__filter-icon": "top: 20px;",
    ".sv-popup--overlay .sv-list__filter": "padding-top: 8px;",
    ".sv-popup--overlay .sv-list__filter-icon": "top: 20px;",
    ".sv-popup--modal": "display: flex; align-items: center; justify-content: center;",
    ".sv-popup--modal .sv-popup__container": "position: static;",
    ".sv-popup--modal .sv-popup__body-content": "padding: calc(4 * var(--base-unit, 8px));",
    ".sv-popup--overlay": "width: 100%;",
    ".sv-popup--overlay .sv-popup__container": "background: rgba(144, 144, 144, 0.5); max-width: 100vw; max-height: calc(100vh - 1 * var(--base-unit, 8px)); height: calc(100vh - 1 * var(--base-unit, 8px)); width: 100%; padding-top: calc(2 * var(--base-unit, 8px)); border: unset;",
    ".sv-popup__shadow": "width: 100%; height: 100%; border-radius: calc(1 * var(--base-unit, 8px));",
    ".sv-popup--overlay .sv-popup__body-content": "border-radius: calc(2 * var(--base-unit, 8px)) calc(2 * var(--base-unit, 8px)) 0px 0px; background: var(--background, #fff); box-shadow: 0px calc(1 * var(--base-unit, 8px)) calc(2 * var(--base-unit, 8px)) rgba(0, 0, 0, 0.1); padding: calc(3 * var(--base-unit, 8px)) calc(2 * var(--base-unit, 8px)) calc(2 * var(--base-unit, 8px)); height: calc(100% - calc(1 * var(--base-unit, 8px))); max-height: 100vh; max-width: 100vw;",
    ".sv-popup--overlay .sv-popup__scrolling-content": "height: calc(100% - (10 * var(--base-unit, 8px)));",
    ".sv-popup--overlay .sv-popup__body-footer": "margin-top: calc(2 * var(--base-unit, 8px));",
    ".sv-popup--overlay .sv-popup__body-footer .sv-action": "width: 100%;",
    ".sv-popup--overlay .sv-popup__body-footer .sv-action-bar": "width: 100%;",
    ".sv-popup--overlay .sv-popup__body-footer-item": "width: 100%;",
    ".sv-popup--overlay .sv-popup__button": "background-color: var(--primary, #19b394); border: 2px solid var(--primary, #19b394); color: var(--primary-foreground, #fff);",
    ".sv-popup__scrolling-content": "height: 100%; overflow: auto; display: flex; flex-direction: column;",
    ".sv-popup__scrolling-content::-webkit-scrollbar": "height: 6px; width: 6px; background-color: var(--background-dim, #f3f3f3);",
    ".sv-popup__scrolling-content::-webkit-scrollbar-thumb": "background: var(--primary-light, rgba(25, 179, 148, 0.1));",
    ".sv-popup__content": "min-width: 100%; height: 100%; display: flex; flex-direction: column; min-height: 0;",
    ".sv-popup--show-pointer.sv-popup--top .sv-popup__pointer": "transform: translate(calc(-1 * var(--base-unit, 8px))) rotate(180deg);",
    ".sv-popup--show-pointer.sv-popup--bottom .sv-popup__pointer": "transform: translate(calc(-1 * var(--base-unit, 8px)), calc(-1 * var(--base-unit, 8px)));",
    ".sv-popup--show-pointer.sv-popup--right": "transform: translate(calc(1 * var(--base-unit, 8px)));",
    ".sv-popup--show-pointer.sv-popup--right .sv-popup__pointer": "transform: translate(-12px, -4px) rotate(-90deg);",
    ".sv-popup--show-pointer.sv-popup--left": "transform: translate(calc(-1 * var(--base-unit, 8px)));",
    ".sv-popup--show-pointer.sv-popup--left .sv-popup__pointer": "transform: translate(-4px, -4px) rotate(90deg);",
    ".sv-popup__pointer": "display: block; position: absolute;",
    ".sv-popup__pointer:after": "content: ' '; display: block; width: 0; height: 0; border-left: calc(1 * var(--base-unit, 8px)) solid transparent; border-right: calc(1 * var(--base-unit, 8px)) solid transparent; border-bottom: calc(1 * var(--base-unit, 8px)) solid var(--background, #fff); align-self: center;",
    ".sv-popup__body-header": "font-family: var(--font-family, $font-family); font-size: calc(3 * var(--base-unit, 8px)); line-height: calc(4 * var(--base-unit, 8px)); font-style: normal; font-weight: 700; margin-bottom: calc(2 * var(--base-unit, 8px)); color: var(--foreground, #161616);",
    ".sv-popup__body-footer": "display: flex; margin-top: calc(4 * var(--base-unit, 8px));",
    ".sv-popup__body-footer .sv-action-bar": "gap: calc(1.5 * var(--base-unit, 8px));",
    ".sv-popup__button": "padding: calc(2 * var(--base-unit, 8px)) calc(6 * var(--base-unit, 8px)); background: var(--background, #fff); box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15); border-radius: 4px; margin: 2px; cursor: pointer; font-family: var(--font-family, $font-family); font-style: normal; font-weight: 600; font-size: calc(2 * var(--base-unit, 8px)); line-height: calc(3 * var(--base-unit, 8px)); text-align: center; color: var(--primary, #19b394); border: none; outline: none;",
    ".sv-popup__button:hover": "box-shadow: 0 0 0 2px var(--primary, #19b394);",
    ".sv-popup__button:disabled": "color: var(--foreground-disabled, rgba(#161616, 0.16)); cursor: default;",
    ".sv-popup__button:disabled:hover": "box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);",
    ".sv-popup__button.sv-popup__button--apply": "background-color: var(--primary, #19b394); color: var(--primary-foreground, #fff);",
    ".sv-popup__button.sv-popup__button--apply:disabled": "background-color: var(--background-dim, #f3f3f3);",
    //eo popup
    //list
    ".sv-list": "padding: 0; margin: 0; background: var(--background, #fff); list-style-type: none; overflow-y: auto;",
    ".sv-list__item--with-icon": "padding-top: 12px; padding-bottom: 12px;",
    ".sv-list__item": "width: 100%; box-sizing: border-box; cursor: pointer; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;",
    ".sv-list__item-body": "width: 100%; box-sizing: border-box; font-size: calc(2 * var(--base-unit, 8px)); line-height: calc(3 * var(--base-unit, 8px)); padding-top: calc(1 * var(--base-unit, 8px)); padding-bottom: calc(1 * var(--base-unit, 8px)); padding-inline-end: calc(8 * var(--base-unit, 8px)); padding-inline-start: calc(2 * var(--base-unit, 8px)); cursor: pointer; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; display: flex; gap: calc(2 * 8px);",
    ".sv-list__item-icon": "float: left; width: calc(3 * 8px); height: calc(3 * 8px);",
    ".sv-list__item-icon svg": "display: block;",
    ".sv-list__item-icon use": "fill: #909090;",
    ".sv-list__item:hover .sv-list__item-body": "background-color: var(--background-dim, #f3f3f3);",
    ".sv-list__item.sv-list__item--focused .sv-list__item-body": "background-color: var(--background-dim, #f3f3f3);",
    ".sv-list__loading-indicator": "pointer-events: none;",
    ".sv-list__loading-indicator .sv-list__item-body": "background-color: transparent",
    // ".sv-list__item--selected": "background-color: var(--primary, #19b394); color: var(--primary-foreground, #fff);",
    ".sv-list__item--selected .sv-list__item-icon use": "fill: var(--primary-foreground, #fff);",
    ".sv-list__item.sv-list__item--disabled": "color: var(--foreground-light, #909090); cursor: default;",
    ".sv-list__item span": "white-space: nowrap;",
    ".sv-list__container": "position: relative; display: flex; flex-direction: column; height: 100%; display: flex; flex-direction: column; min-height: 0;",
    ".sv-list__filter": "border-bottom: 1px solid rgba(0, 0, 0, 0.16); background: var(--background, #fff); padding-bottom: calcSize(1);",
    ".sv-list__input": "-webkit-appearance: none; -moz-appearance: none; appearance: none; display: block; box-sizing: border-box; width: 100%; line-height: 24px; padding-left: 56px; padding-right: 24px; padding-top: 12px; padding-bottom: 12px; outline: none; font-size: 1em; border: none",
    ".sv-list__filter-icon": "display: block; position: absolute; top: 12px; left: 16px;",
    ".sv-list__filter-icon .sv-svg-icon": "width: 24px; height: 24px;",
    ".sv-list__empty-container": "width: 100%; box-sizing: border-box; padding: 12px 64px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;",
    ".sv-list__empty-text": "line-height: 24px; font-size: 16px; font-weight: 400; text-align: center; color: var(--foreground-light, #909090);",
    //eo list
    ".sv-skeleton-element": "min-height: 50px;",
  };
}