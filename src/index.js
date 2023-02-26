import _ from "lodash";

function createComponent() {
    const element = document.createElement('div');

    //lodash function - join array as string
    element.innerHTML = _.join(['lodash', 'function'], ' ');

    return element;
}

document.body.appendChild(createComponent());