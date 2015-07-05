ready = (new Date()).getTime()
diff = ready - (process.argv[2] * 1000 + process.argv[3] / 1000000)
console.log(diff)
