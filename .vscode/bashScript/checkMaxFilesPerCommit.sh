#! /bin/sh
NUMBER_OF_COMMIT_FILES=$(git diff --cached --numstat | wc -l)
echo $NUMBER_OF_COMMIT_FILES