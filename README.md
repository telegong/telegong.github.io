### D drive as a Root of Revit Central Model Path and Symbolic_Link the Folder to a File Server Path

#### D:\ Root Path of a Revit Central Model

    # Set the root path of the RVT central model files to D:\ drive
        D:\BIM\ClientA\ProjectB\CentralC\BuildingD_Central.rvt

#### Worksharing with Colleagues

    # Work-Sharing the revit central model files with Colleagues on LAN by symbolic_link path

    # cut "ProjectB" folder and paste it to under "Z:\BIM\ClientA"  
        move "D:\BIM\ClientA\ProjectB" "Z:\BIM\ClientA"

    # Administrator Command Prompt
        mklink /D "D:\BIM\ClientA\ProjectB" "Z:\BIM\ClientA\ProjectB"

    # All Colleagues make symbolic_link same as above to any network drive letter
        mklink /D "D:\BIM\ClientA\ProjectB" "W:\BIM\ClientA\ProjectB"
        mklink /D "D:\BIM\ClientA\ProjectB" "X:\BIM\ClientA\ProjectB"
        mklink /D "D:\BIM\ClientA\ProjectB" "Y:\BIM\ClientA\ProjectB"

    # Always Revit open file from the Same One Path
        D:\BIM\ClientA\ProjectB\CentralC\BuildingD_Central.rvt

  ##### # [The Complete Guide to Creating Symbolic Links (aka Symlinks) on Windows](https://www.howtogeek.com/howto/16226/complete-guide-to-symbolic-links-symlinks-on-windows-or-linux/)

#### Sharing the Model with Partners

    # zip the symbolic_link folder then it will zip all model files from the file server

    # Parters should unzip the received zip file to the same folder path 
        D:\BIM\ClientA\ProjectB\CentralC\BuildingD_Central.rvt
