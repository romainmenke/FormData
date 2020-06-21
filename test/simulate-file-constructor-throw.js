// Want to simulate the kind of error we get in
// old safari & ie when constructing a file
const NativeFile = window.File;

window.File = new Proxy(NativeFile, {
	construct(target, args) {
		throw new Error();
	}
});