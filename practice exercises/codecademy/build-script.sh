#!/bin/bash
echo "This is happening now"
firstline=$(head -n 1 source/changelog.md) 
read -a splitfirstline <<< $firstline
version=${splitfirstline[1]}
echo "You're using version" $version
echo "Do you want to continue? Enter 1 for yes, 0 for no"
read versioncontinue
if [ $versioncontinue -eq 1 ] 
 then
   echo "OK"
   for filename in source/*
   do
     echo $filename
     if [ "$filename" == "source/secretinfo.md" ]
     then
       echo "Not copying" $filename
     else
       echo "Copying" $filename
       cp $filename build/.
    fi
   done
   cd build/
   echo "Build version $version contains:"
   ls
   cd ..
 else
   echo "Please come back when you are ready"
fi
