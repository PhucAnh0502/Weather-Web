export async function getLocation() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                const lat = pos.coords.latitude;
                const long = pos.coords.longitude;
                resolve({lat, long});
            },
            (err) => {
                reject(`ERROR(${err.code}): ${err.message}`);
            }
        );
    });
}