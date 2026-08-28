# 11.2 Folder & File Structure

The platform architecture follows a strict **layer-per-concern pattern** to decouple operational behaviors, maximize testing boundaries, and ensure a scalable codebase repository footprint.


## Backend Framework Rules

New backend code for a resource is added to the matching layer file for that resource — e.g. a new batch endpoint goes in `eloop/routers/batch.py`, which calls into `eloop/services/`, which in turn may call `eloop/services/material_lookup.py` or `batch_averager.py`.

### Backend Directory Map
```text
├── alembic/                         
│   ├── __pycache__/                 
│   ├── env.py                       
│   ├── README                       
│   ├── script.py.mako               
│   └── versions                     
├── alembic.ini                     
├── database.py                     
├── eloop/                          
│   ├── __pycache__/                 
│   ├── mail.py                      
│   ├── models                       
│   ├── rate_limit.py                
│   ├── redis_client.py              
│   ├── repositories                 
│   ├── routers                      
│   ├── schemas                      
│   ├── security.py                  
│   └── services                     
├── env/                            
│   ├── bin/                         
│   ├── CACHEDIR.TAG                 
│   ├── include/                     
│   ├── lib/                         
│   └── lib64 -> lib                 
├── main.py                         
├── Procfile                        
├── README.md                       
└── requirements.txt               
```


## Frontend Folder Structure

The Next.js Progressive Web App (PWA) client repository leverages a standardized component, asset, and module layout matching the file tree below:

```text
├── eslint.config.mjs                
├── next-env.d.ts                    
├── next.config.ts                   
├── node_modules/                    
├── app/                             
│   ├── dashboard/                   
│   ├── favicon.ico                  
│   ├── forgot-password/             
│   ├── globals.css                  
│   ├── layout.tsx                   
│   ├── page.tsx                     
│   ├── recycling/                   
│   ├── reset-password/              
│   ├── signin/                      
│   ├── signup/                      
│   └── welcome/                     
├── components/                      
│   ├── backButton.tsx               
│   ├── dashboard/                   
│   └── onBoardingScreens.tsx        
├── hooks/                           
│   └── useOnboarding.ts             
├── lib/                             
│   └── api.ts                       
├── package-lock.json                
├── package.json                     
├── postcss.config.mjs               
├── public/                          
└── src/                             
    ├── app/                         
    ├── components/                  
    ├── hooks/                       
    └── lib/                         
```
