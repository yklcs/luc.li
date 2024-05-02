---
date: 2023-10-19
---

# Universal libraries with WebAssembly

A lot of common software utilities have just a single library implementation. For example, WebP encoding exists only in [a C library](https://chromium.googlesource.com/webm/libwebp). This means that any program looking to encode WebP requires C interop through FFI. There are a number of reasons to avoid this, including harder debugging, toolchain complications, and losing cross compiling.

A large subset of these single implementation libraries are for low IO, high compute tasks, such as codecs and compression. This makes them a good candidate for compilation to WebAssembly. Once compiled to WASM, libraries can be used in not only the web, but also in a number of languages and environments through different embedded WASM runtimes. This enables the creation of “universal” libraries at the cost of runtime performance.

An example of this approach is my [wasmimg](https://github.com/yklcs/wasmimg) Go library. It takes [MozJPEG](https://github.com/mozilla/mozjpeg) compiled to WASM and runs it with the [wazero](https://github.com/tetratelabs/wazero) runtime. WASM compilation is done with the Emscripten toolchain, and the binary output is embedded into the library with the [`go:embed` directive](https://pkg.go.dev/embed). The wazero runtime itself is written in pure Go, eliminating the need for any FFI. This allows the usage of MozJPEG from Go without CGo.

This method does have its caveats. Not all libraries compile to WASM, and a lot of build file hacking is usually required for libraries that do. A lot of performance is lost from the overhead of runtimes and the plain immaturity of WASM toolchains. Not many languages have their own native WASM runtime, which defeats the purpose of this approach.

Nevertheless, compiling libraries to WASM and running in an embedded runtime is a viable choice for having language-agnostic libraries and eliminating FFI.
