function downloadVideo(url, filename) {
    // const fileName = path.basename(fileUrl);
    // var filename = path.basename(url)
    
    Https.get(url,
      function(res) {
        var stream = fs.createWriteStream(filename)
        res.pipe(stream)
      })
      
    console.log("Downloading to "+filename);
  }
  
  downloadVideo("https://www.youtube.com/watch?v=Fm9ZxecX1BU", "done.flv")

  const download = (url, filename, callback) =>{
    try {
     axios
           .head(url)
           .then(() =>
             axios
               .get(url, { responseType: "stream" })
               .then(({ data }) =>{
                const result = data.pipe(fs.createWriteStream(filename)).on('close', callback)
                 console.log(result);}
                 )
               // .then(() => {
               //   resolve(url)
               // })
               // .catch(e => {
               //   resolve(false)
               // })
               // onst result = axios(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                
   
     );
    } catch (error) {
     console.error(error)
    }
   };
   
   download('https://www.youtube.com/watch?v=Fm9ZxecX1BU', 'downloa', function(){
     console.log('done'); 
   });

   


   


   // downloadFolder: the path of the downloaded file on your machine
const downloadFile = async (fileUrl, downloadFolder) => {
    // Get the file name
    const fileName = path.basename(fileUrl);
  
    // The path of the downloaded file on our machine
    const localFilePath = path.resolve( downloadFolder, fileName);
    console.log(localFilePath)
    try {
      const response = await axios({
        method: 'GET',
        url: fileUrl,
        responseType: 'stream',
      });
  
      const w = response.data.pipe(fs.createWriteStream(localFilePath));
      w.on('finish', () => {
        console.log('Successfully downloaded file!');
      });
    } catch (err) { 
      throw new Error(err);
    }
  };
  // https://www.youtube.com/watch?v=Fm9ZxecX1BU
  
  // Testing
  const IMAGE_URL =
    'https://www.kindacode.com/wp-content/uploads/2021/01/test.jpg';
  downloadFile(IMAGE_URL, 'download');
  
  const VIDEO_URL =
    'https://www.youtube.com/watch?v=Fm9ZxecX1BU';
  downloadFile(VIDEO_URL, 'download'); 



  const  downloader = async(url, callback) => {
    try {
      axios({
        method: 'get',
        url: url,
        responseType: 'stream'
    })
        .then(function (response) {
            return new Promise((resolve, reject) => {
                const filename = path.basename(url);
                const file = fs.createWriteStream(`video.mp4`);
     response.data.pipe(file);
    
    
                file.on("error", (error) => {
                    return reject(`There was an error writing the file. Details: $ {error}`);
                });
    
                file.on('finish', () => {
                    file.close();
                });
    
                file.on('close', () => {
                    return resolve(filename);
                });
            });
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function (filename) {
            callback(filename);
        })
    } catch (error) {
      console.log(error);
    }
    }
    
     const data = await downloader("https://www.youtube.com/watch?v=gXuzkwRivfg", ()=>{
      console.log(data)
    })  