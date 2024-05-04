# TinyMCE Oxide skin tools

This project contains the default skins as well as tools and files needed to build your own skin for TinyMCE 7.

Visit the [TinyMCE 7 documentation](https://www.tiny.cloud/docs/tinymce/7/creating-a-skin/) for instructions on how to create and build skins for TinyMCE.

## Building the skins for the end™

The skin for the end™ is developed in the [wagtail-skin](https://github.com/moreonion/tinymce-wagtail-skin/tree/wagtail-skin/modules/oxide) branch.

1. The `tinymce-wagtail-skin/` root directory must be located next to the `end/` root directory.
2. Go to `tinymce-wagtail-skin/modules/oxide` and install dependencies with `yarn`.
3. Run Gulp with `yarn build` or `yarn start` to watch the source files and compile on the fly. Both commands copy the compiled CSS to `end/src/assets/tinymce/`.
