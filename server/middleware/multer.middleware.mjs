import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/temp"); // Store the file temporarily in this location
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // It is best practice to generate a unique name for a file; for now, using the original name
    }
});

const fileFilter = (req, file, cb) => {
    const filetypes = /pdf/; // Accept only PDF files
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

    if (mimetype && extname) {
        return cb(null, true);
    }
    cb(new Error("Only PDF files are allowed"));
};

const upload = multer({
    storage,
    fileFilter,
}).single("pdfFile"); // 'pdfFile' should match the name attribute in your HTML form for file input

export default upload;
