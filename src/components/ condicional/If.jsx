export default function If(props) {
  // Capturando Elemento Else
  const elseChild = props.children.filter((child) => {
    return child.type && child.type.name === "Else";
  })[0];

  // Filtrando conteúdo que não tem relação com o filho
  const ifChildren = props.children.filter((child) => {
    return child !== elseChild;
  });

  if (props.test) {
    return ifChildren;
  } else if (elseChild) {
    return elseChild;
  } else {
    return false;
  }
}

export const Else = (props) => props.children;
