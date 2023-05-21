export const getInputValue = (id: string) => {
  return (document.getElementById(id) as HTMLInputElement).value;
};

export const getSelectValue = (id: string) => {
  var select = document.getElementById(id) as HTMLSelectElement;
  return select.options[select.selectedIndex].text;
};

export const getSelectedValues = (id: string) => {
  var result = [];
  var select = document.getElementById(id) as HTMLSelectElement;
  var options = select && select.options;
  var opt;

  for (var i = 0, iLen = options.length; i < iLen; i++) {
    opt = options[i];

    if (opt.selected) {
      result.push(opt.value || opt.text);
    }
  }
  return result;
};

export const  clearSelected = ( id: string) => {
  var select = document.getElementById(id) as HTMLSelectElement;
  var elements = select.options;

  for(var i = 0; i < elements.length; i++){
    elements[i].selected = false;
  }
}