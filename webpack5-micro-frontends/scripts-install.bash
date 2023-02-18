#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit
npm --prefix dashboard install
npm --prefix hello-world install
npm --prefix image-caption install
npm --prefix kiwi install