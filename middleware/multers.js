import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../backend-e-commerse/upload/imgae')
    },
    filename: function (req, file, cb) {
        const suffixstring = Date.now() + '_' + Math.round(Math.random() * 10000)
        cb(null, file.fieldname + '_' + suffixstring + ".png")
    }
})

export const upload = multer({ storage: storage })