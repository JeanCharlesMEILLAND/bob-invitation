export const changeSrcUrl = (html: string) => {
  if (!html || typeof html !== "string") {
    return "";
  }
  const arrHtml = html.split(" ");
  for (let i = 0; i < arrHtml.length; i++) {
    const element = arrHtml[i];
    if (element.startsWith("src=")) {
      const newSrc = element.substring(0, 5) + element.substring(5);
      arrHtml[i] = newSrc;
    }
    if (element.startsWith("srcset=")) {
      arrHtml[i] = "";
    }
  }
  const result = arrHtml.join(" ");
  return result;
};


