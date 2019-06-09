import vrep
import sys, math
# child threaded script: 
# 內建使用 port 19997 若要加入其他 port, 在  serve 端程式納入
#simExtRemoteApiStart(19999)
  
vrep.simxFinish(-1)
  
clientID = vrep.simxStart('127.0.0.1', 19997, True, True, 5000, 5)
if clientID!= -1:
    print("Connected to remote server")
else:
    print('Connection not successful')
    sys.exit('Could not connect')

KickBallV = 360  
R_KickBallVel = (math.pi/180)*KickBallV
B_KickBallVel = -(math.pi/180)*KickBallV

errorCode,lrev_handle=vrep.simxGetObjectHandle(clientID,'lrev',vrep.simx_opmode_oneshot_wait)
errorCode,lmo_handle=vrep.simxGetObjectHandle(clientID,'lmo',vrep.simx_opmode_oneshot_wait)
errorCode,rrev_handle=vrep.simxGetObjectHandle(clientID,'rrev',vrep.simx_opmode_oneshot_wait)
errorCode,rmo_handle=vrep.simxGetObjectHandle(clientID,'rmo',vrep.simx_opmode_oneshot_wait)
errorCode,rrov_handle=vrep.simxGetObjectHandle(clientID,'rrov',vrep.simx_opmode_oneshot_wait)
errorCode,lrov_handle=vrep.simxGetObjectHandle(clientID,'lrov',vrep.simx_opmode_oneshot_wait)
errorCode,Sphere_handle=vrep.simxGetObjectHandle(clientID,'Sphere',vrep.simx_opmode_oneshot_wait)
#定義平移軸旋轉軸
vrep.simxSetJointTargetVelocity(clientID,lmo_handle,0,vrep.simx_opmode_oneshot_wait)
vrep.simxSetJointTargetVelocity(clientID,lrev_handle,0,vrep.simx_opmode_oneshot_wait)
   


#定義平移軸及旋轉軸的速度

def start():
    errorCode=vrep.simxStartSimulation(clientID,vrep.simx_opmode_oneshot_wait)
 
def getballposition():
    errorCode,position_BR=vrep.simxGetObjectPosition(clientID,rrov_handle,-1,vrep.simx_opmode_oneshot)
    errorCode,position_B1R=vrep.simxGetObjectPosition(clientID,lrov_handle,-1,vrep.simx_opmode_oneshot)
    errorCode,position_S=vrep.simxGetObjectPosition(clientID,Sphere_handle,-1,vrep.simx_opmode_oneshot)
    vv =position_S[1] - position_BR[1]
    vvv =position_S[0] - position_BR[0]
    Bvv =position_S[1] - position_B1R[1]
    Bvvv =position_S[0] - position_B1R[0]

    
    while True:
        if vv <= 0 and vvv <= 0.04:
            errorCode,position_BR=vrep.simxGetObjectPosition(clientID,rrov_handle,-1,vrep.simx_opmode_oneshot)
            errorCode,position_S=vrep.simxGetObjectPosition(clientID,Sphere_handle,-1,vrep.simx_opmode_oneshot)
            vv =position_S[1]- position_BR[1]
            vvv =position_S[0] - position_BR[0]
            vrep.simxSetJointTargetVelocity(clientID,rrev_handle,B_KickBallVel,vrep.simx_opmode_oneshot_wait)
          
        elif vv > 0 and vvv <= 0.04:
            errorCode,position_BR=vrep.simxGetObjectPosition(clientID,rrov_handle,-1,vrep.simx_opmode_oneshot)
            errorCode,position_S=vrep.simxGetObjectPosition(clientID,Sphere_handle,-1,vrep.simx_opmode_oneshot)
            vv =position_S[1]- position_BR[1]
            vvv =position_S[0] - position_BR[0]
            vrep.simxSetJointTargetVelocity(clientID,rrev_handle,B_KickBallVel,vrep.simx_opmode_oneshot_wait)
              
        elif vv <= 0 and vvv > 0.04:
            errorCode,position_BR=vrep.simxGetObjectPosition(clientID,rrov_handle,-1,vrep.simx_opmode_oneshot)
            errorCode,position_S=vrep.simxGetObjectPosition(clientID,Sphere_handle,-1,vrep.simx_opmode_oneshot)
            vv =position_S[1]- position_BR[1]
            vvv =position_S[0] - position_BR[0]
            vrep.simxSetJointTargetVelocity(clientID,rrev_handle,R_KickBallVel,vrep.simx_opmode_oneshot_wait)
          
        elif vv > 0 and vvv > 0.04:
            errorCode,position_BR=vrep.simxGetObjectPosition(clientID,rrov_handle,-1,vrep.simx_opmode_oneshot)
            errorCode,position_S=vrep.simxGetObjectPosition(clientID,Sphere_handle,-1,vrep.simx_opmode_oneshot)
            vv =position_S[1]- position_BR[1]
            vvv =position_S[0] - position_BR[0]
            vrep.simxSetJointTargetVelocity(clientID,rrev_handle,R_KickBallVel,vrep.simx_opmode_oneshot_wait)
        if Bvv <= 0 and Bvvv > -0.04:
            errorCode,position_B1R=vrep.simxGetObjectPosition(clientID,lrov_handle,-1,vrep.simx_opmode_oneshot)
            errorCode,position_S=vrep.simxGetObjectPosition(clientID,Sphere_handle,-1,vrep.simx_opmode_oneshot)
            Bvv =position_S[1]- position_B1R[1]
            Bvvv =position_S[0] - position_B1R[0]
            vrep.simxSetJointTargetVelocity(clientID,lrev_handle,R_KickBallVel,vrep.simx_opmode_oneshot_wait)
          
        elif Bvv > 0 and Bvvv > -0.04:
            errorCode,position_B1R=vrep.simxGetObjectPosition(clientID,lrov_handle,-1,vrep.simx_opmode_oneshot)
            errorCode,position_S=vrep.simxGetObjectPosition(clientID,Sphere_handle,-1,vrep.simx_opmode_oneshot)
            Bvv =position_S[1]- position_B1R[1]
            Bvvv =position_S[0] - position_B1R[0]
            vrep.simxSetJointTargetVelocity(clientID,lrev_handle,R_KickBallVel,vrep.simx_opmode_oneshot_wait)
              
        elif Bvv <= 0 and Bvvv < -0.04:
            errorCode,position_B1R=vrep.simxGetObjectPosition(clientID,lrov_handle,-1,vrep.simx_opmode_oneshot)
            errorCode,position_S=vrep.simxGetObjectPosition(clientID,Sphere_handle,-1,vrep.simx_opmode_oneshot)
            Bvv =position_S[1]- position_B1R[1]
            Bvvv =position_S[0] - position_B1R[0]
            vrep.simxSetJointTargetVelocity(clientID,lrev_handle,B_KickBallVel,vrep.simx_opmode_oneshot_wait)
          
        elif Bvv > 0 and Bvvv < -0.04:
            errorCode,position_B1R=vrep.simxGetObjectPosition(clientID,lrov_handle,-1,vrep.simx_opmode_oneshot)
            errorCode,position_S=vrep.simxGetObjectPosition(clientID,Sphere_handle,-1,vrep.simx_opmode_oneshot)
            Bvv =position_S[1]- position_B1R[1]
            Bvvv =position_S[0] - position_B1R[0]
            vrep.simxSetJointTargetVelocity(clientID,lrev_handle,B_KickBallVel,vrep.simx_opmode_oneshot_wait)    
            
        else:
            pass
        Mv = vv*2.3
        Mv = Bvv*2.3
        vrep.simxSetJointTargetVelocity(clientID,rmo_handle,Mv,vrep.simx_opmode_oneshot_wait)
        vrep.simxSetJointTargetVelocity(clientID,lmo_handle,Mv,vrep.simx_opmode_oneshot_wait)

start()
getballposition()  

#執行按建