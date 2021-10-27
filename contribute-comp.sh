
function syncone(){

  local targetComp=$1
  local targetFolder="~/githome/dyna-react-ui/src/components/"
  cp -R "src/components/${targetComp}" ~/githome/dyna-react-ui/src/components/
  echo "copied ${targetComp} => ${targetFolder}"

}

syncone process
syncone statetrans




