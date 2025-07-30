const poems = {
    puisi1: {
        title: "Puisi Pertama",
        content: "Ini adalah isi lengkap dari puisi pertama. Puisi ini menggambarkan keindahan alam dan perasaan penulis.",
        date: "1 Januari 2023"
    },
    puisi2: {
        title: "Puisi Kedua",
        content: "Ini adalah isi lengkap dari puisi kedua. Puisi ini berbicara tentang cinta dan harapan.",
        date: "15 Februari 2023"
    },
    puisi3: {
        title: "Puisi Ketiga",
        content: "Ini adalah isi lengkap dari puisi ketiga. Puisi ini menggambarkan kesedihan dan kehilangan.",
        date: "10 Maret 2023"
    },
};

function showPoem(poemId) {
    const poem = poems[poemId];
    document.getElementById('poem-title').innerText = poem.title;
    document.getElementById('poem-content').innerText = poem.content;
    document.getElementById('poem-date').innerText = poem.date;
    document.getElementById('poem-list').classList.add('hidden');
    document.getElementById('poem-detail').classList.remove('hidden');
}

function goBack() {
    document.getElementById('poem-detail').classList.add('hidden');
    document.getElementById('poem-list').classList.remove('hidden');
}

function searchPoems() {
    const input = document.getElementById('search').value.toLowerCase();
    const listItems = document.querySelectorAll('#poem-list li');
    listItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(input) ? '' : 'none';
    });
}
