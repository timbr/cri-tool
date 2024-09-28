import {html} from "../../_npm/htl@0.3.1/063eb405.js";

export var criButton = function criButton(linkText, link, params='') {
    if (params != '') {
      params = '?la=' + params
    }
    return html`
    <a href='${link}${params}'>
      <button style="background-color: rgb(25, 62, 114); color: white; padding: 15px 30px; border: none; border-radius: 18px; font-size: 14px; cursor: pointer;">
        ${linkText}
      </button>
    </a>
    `
};
