echo "Building app..."
echo "Deploying files to server..."
scp -r build/* root@45.67.57.196:/root/multigames-shop/client/build/

echo "Done!"
sleep 5