const copyright = () => {
    const year = new Date().getFullYear();
    document.querySelector('.copyright').innerHTML = `&copy; ${year} | ~Scoots - All Rights Reserved`;
}

copyright();