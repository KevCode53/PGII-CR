import { useEffect, useRef } from 'react';
import { PlantIcon } from '../../components/UI/icons/PlantIcon';
import styles from './styles.module.css'
import { Link } from 'react-router-dom';
import { irrigationI } from '../../models/plantations.models';
import { ClockIcon } from '../../components/UI/icons/ClockIcon';
import { DropIcon } from '../../components/UI/icons/DropIcon';


export const DashboardCard = (
  {id, name, created, days, porcent, irrigations, water}:
  {
    id:number,
    name:string,
    created:string,
    days:string | number,
    porcent:number,
    irrigations:irrigationI[],
    water:string | number
  }
) => {

  const porcentRef = useRef<SVGCircleElement>(null)

  useEffect(()=>{
    const porcentStroke = 270 - (270 * (porcent/100))
    porcentRef.current!.style.strokeDashoffset = porcentStroke.toString()
  },[])

  return (
    <Link to={`/plantations-detail/${id}`}>
      <div key={id} className={styles.card_dash}>
        <picture>
          <PlantIcon />
        </picture>
        <div className={styles.title_name}>
          <PlantIcon />
          {name}
        </div>
        <div className={styles.card_content}>
          
          <div className={styles.cosecha}>
            <p>Creado: {created}</p>

            <div className={styles.skill}>
              <div className={styles.outer}>
                <div className={styles.inner}>
                  <div className={styles.number_porcent}>
                    {porcent}%
                  </div>
                </div>
              </div>

              <svg xmlns="" version="1.1" width="120px" height="120px">
                <defs>
                  <linearGradient id="GradientColor">
                    <stop offset="0%" stopColor="#e91e63" />
                    <stop offset="100%" stopColor="#673ab7" />
                  </linearGradient>
                </defs>
                <circle 
                  ref={porcentRef} 
                  cx="50" 
                  cy="50" 
                  r="43" 
                  strokeLinecap="round"
                  stroke="url(#GradientColor)" />
              </svg>

            </div>

            <p>Dias para cosecha: <span>{days} dias</span></p>

          </div>

          <div className={styles.more_info}>

            <div>
              <span className={styles.sub_title}> <ClockIcon/> Programacion de riego</span>
              <div className={styles.irrigations}>
                <ul>
                  {irrigations?.map(irrigation => (
                    <li key={irrigation?.id}><p><span>{irrigation?.start_time}</span> - <span>{irrigation?.end_time}</span></p></li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="">
              <p className={styles.sub_title}> <DropIcon/> Consumo Agua: {water} Lts.</p>
            </div>

          </div>
        
        </div>
      </div>
    </Link>
  );
}
