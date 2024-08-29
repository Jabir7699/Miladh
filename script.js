document.getElementById('photo').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('cropperImage').src = e.target.result;
            document.getElementById('cropperModal').style.display = 'block';

            const cropper = new Cropper(document.getElementById('cropperImage'), {
                aspectRatio: 1,
                viewMode: 1,
                crop: function(event) {
                    // You can use this function to handle cropping changes if needed
                }
            });

            document.getElementById('cropButton').addEventListener('click', function() {
                const croppedCanvas = cropper.getCroppedCanvas({ width: 150, height: 150 });
                document.getElementById('posterPhoto').src = croppedCanvas.toDataURL('image/png');
                document.getElementById('croppedPhoto').value = croppedCanvas.toDataURL('image/png');
                document.getElementById('cropperModal').style.display = 'none';
            });

            document.querySelector('.close').addEventListener('click', function() {
                document.getElementById('cropperModal').style.display = 'none';
            });
        }
        reader.readAsDataURL(file);
    }
});

document.getElementById('posterForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const place = document.getElementById('place').value;
    const game = document.getElementById('game').value;

    document.getElementById('posterName').textContent = name;
    document.getElementById('posterPlace').textContent = place;
    document.getElementById('posterGame').textContent = game;

    // Show the poster
    document.getElementById('poster').style.display = 'block';

    // Generate poster image and provide download link
    html2canvas(document.getElementById('poster')).then(canvas => {
        const dataURL = canvas.toDataURL('image/png');
        const downloadLink = document.getElementById('downloadLink');
        downloadLink.href = dataURL;
        downloadLink.style.display = 'inline';
    });
});


document.getElementById('photo').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('cropperImage').src = e.target.result;
            document.getElementById('cropperModal').style.display = 'block';

            const cropper = new Cropper(document.getElementById('cropperImage'), {
                aspectRatio: 1,
                viewMode: 1
            });

            document.getElementById('cropButton').addEventListener('click', function() {
                const croppedCanvas = cropper.getCroppedCanvas({ width: 150, height: 150 });
                document.getElementById('posterPhoto').src = croppedCanvas.toDataURL('image/png');
                document.getElementById('croppedPhoto').value = croppedCanvas.toDataURL('image/png');
                document.getElementById('cropperModal').style.display = 'none';
            });

            document.querySelector('.close').addEventListener('click', function() {
                document.getElementById('cropperModal').style.display = 'none';
            });
        }
        reader.readAsDataURL(file);
    }
});
