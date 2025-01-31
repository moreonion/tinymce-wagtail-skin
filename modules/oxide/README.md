# TinyMCE Oxide skin tools

This project contains the default skins as well as tools and files needed to build your own skin for TinyMCE 7.

Visit the [TinyMCE 7 documentation](https://www.tiny.cloud/docs/tinymce/7/creating-a-skin/) for instructions on how to create and build skins for TinyMCE.

## Building the skins for the end™

Skins for the end™ are developed in the [wagtail-skin](https://github.com/moreonion/tinymce-wagtail-skin/tree/wagtail-skin/modules/oxide) branch.

1. The `tinymce-wagtail-skin/` root directory must be located next to the `end/` root directory.
2. Go to `tinymce-wagtail-skin/modules/oxide` and install dependencies with `yarn`.
3. To view the skins, run `yarn start` in this repository and navigate to `http://localhost:4000`.
4. To view the skins in the `end` repository you need to build it first, run `yarn build` in this repository, it will move the skins to the `end/css` directory automatically.
