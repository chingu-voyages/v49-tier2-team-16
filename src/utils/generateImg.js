const generateImgURL = (prompt, colors) => {
    const url = `https://openai-api-u24k.onrender.com/v49/img/${prompt}/${colors}`;
    return url;
}

export default generateImgURL;