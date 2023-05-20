export const getInputValue = (id: string) => {
  return (document.getElementById(id) as HTMLInputElement).value;
};

export const getSelectValue = (id:string) => {
    var select = (document.getElementById(id) as HTMLSelectElement);
    return select.options[select.selectedIndex].text
}
