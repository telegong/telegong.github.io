### D drive as a Root of Revit Central Model Path and Symbolic_Link the Folder to a File Server Path

#### D:\ Root Path of a Revit Central Model

    # Set the root path of the RVT central model files to D:\ drive
        D:\BIM\ProjectLocationAddress\ProjectName\BuildingDisciplines_Central.rvt

#### Worksharing with Colleagues

    # Work-Sharing the revit central model files with Colleagues on LAN by symbolic_link path.

    # Cut "ProjectName" working folder and paste it to under "Z:\ArchiFirm\ClientA\Project" of your file_server_folder.
        move "D:\BIM\ProjectLocationAddress\ProjectName" "Z:\ArchiFirm\ClientA\Project"

    # Make symbolic link of server_central_folder as D_drive_project_folder on the Command Prompt opened as Administrator.
        mklink /D "D:\BIM\ProjectLocationAddress\ProjectName" "Z:\ArchiFirm\ClientA\Project"

    # All your colleagues can make symbolic_link like the same way above and use any network_drive_letter.
        mklink /D "D:\BIM\ProjectLocationAddress\ProjectName" "W:\ArchiFirm\ClientA\Project"
        mklink /D "D:\BIM\ProjectLocationAddress\ProjectName" "X:\ArchiFirm\ClientA\Project"
        mklink /D "D:\BIM\ProjectLocationAddress\ProjectName" "Y:\ArchiFirm\ClientA\Project"

    # All partners can make symbolic_link like the same way above and use any network_drive_letter and folder_name.
        mklink /D "D:\BIM\ProjectLocationAddress\ProjectName" "W:\StrucFirm\ClientB\ProjectB"
        mklink /D "D:\BIM\ProjectLocationAddress\ProjectName" "X:\MEPFirm\ClientC\ProjectC"
        mklink /D "D:\BIM\ProjectLocationAddress\ProjectName" "Y:\LandFirm\ClientD\ProjectD"

    # Always, the Revit has to open the central files from the Same Project Path
        D:\BIM\ProjectLocationAddress\ProjectName\BuildingDisciplines_Central.rvt

  ##### # [The Complete Guide to Creating Symbolic Links (aka Symlinks) on Windows](https://www.howtogeek.com/howto/16226/complete-guide-to-symbolic-links-symlinks-on-windows-or-linux/)

#### Sharing the Model with Partners

    # zip the symbolic_link folder then it will zip all model files from the file server

    # Parters should unzip the received zip file to the same folder path 
        D:\BIM\ProjectLocationAddress\ProjectName\BuildingDisciplines_Central.rvt
