echo "Building app..."

npm run build

echo "Deploying files to server..."
scp -r build/* root@45.67.57.196:/var/www/skygames.su/

echo "Done!"