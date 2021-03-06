#!/bin/bash

# Ask the user which app they want to Symlink with
echo Which application would you like to create a symlink for?
options=("drumeo" "pianote" "guitareo")
select opt in "${options[@]}"
do
    case $opt in
        "drumeo")
            echo "Symlinking Vuesora with Drumeo!"
            npm install; npm run lib:watch & npm link; cd /app/drumeo/laravel; npm link vuesora; npm run watch;
            echo "Watching Drumeo For Changes..."
            ;;
        "pianote")
            echo "Symlinking Vuesora with Pianote!"
            npm install; npm run lib:watch & npm link; cd /app/pianote; npm link vuesora; npm run watch;
            echo "Watching Pianote For Changes..."
            ;;
        "guitareo")
            echo "Symlinking Vuesora with Guitareo!"
            npm install; npm run lib:watch & npm link; cd /app/guitareo; npm link vuesora; npm run watch;
            ;;
        *)
          echo "Invalid option $REPLY"
          break
          ;;
    esac
done

