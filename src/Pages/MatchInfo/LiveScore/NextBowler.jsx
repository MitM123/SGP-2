import { Modal, ModalDialog, Option, Select } from '@mui/joy';
import React, { useContext } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { ScorePanelContext } from './ScorePanel';
import Global from '../../../Utils/Global';
import { useParams } from 'react-router-dom';
import { setMatch } from '../../../Helper/Helper';
import { AppContext } from '../../../App';

const NextBowler = ({ open, upcomingBowlers, ballType }) => {
  const context = useContext(ScorePanelContext);
  const { matchId } = useParams();
  const appContext = useContext(AppContext);

  const handleButton = (event) => {
    event.preventDefault();
    Global.httpPut('/matches/runs/' + matchId, { runs: ballType !== "NORMAL" ? (1 + context.runs) : context.runs, ballType, nextBowlerId: context.nextBowler }, true)
      .then(res => {
        console.log(res);
        setMatch(appContext, matchId);
      })
      .catch(error => {
        console.log(error);
      });
    context.closeModal();
  }

  return (
    <>
      <Modal open={open} >
        <ModalDialog sx={{ width: '27%', height: '20%', padding: '0', '@media(max-width:680px)': { height: '10%' }, '@media(max-width:420px)': { height: '13%' } }}>
          <div className='h-14 flex justify-between  bg-primary-color'>

            <div className='flex  h-full p-2 items-center ml-3 text-white text-2xl font-Jost'>
              Select next bowler
            </div>
            <div className='flex items-center mr-3 cursor-pointer'>
              <AiOutlineClose color='white' size={25} onClick={(event) => {
                event.preventDefault();
                context.closeModal(false);
              }} />
            </div>

          </div>

          <div className='flex h-40 flex-row gap-x-2 justify-center font-poppins items-center ml-2 '>
            <Select
              name='bowler'
              onChange={((_, playerId) => context.setNextBowler(playerId))}
              placeholder="Select next bowler"
              sx={{ width: '100%', padding: 1 }}
              slotProps={{
                listbox: {
                  placement: 'bottom-start',
                },
              }}
            >
              {
                upcomingBowlers.length > 0 ?
                  upcomingBowlers
                    .map((bowler, i) => {
                      return (
                        <Option value={bowler.playerId} key={i}>
                          {bowler.player.user.name[0].toUpperCase() + bowler.player.user.name.slice(1)}
                        </Option>
                      )
                    })
                  :
                  <Option value="1">
                    Loading...
                  </Option>
              }
            </Select>


            <button className=' text-white bg-primary-color ml-5 text-lg font-Outfit items-center flex  justify-center p-1 rounded-lg w-20 font-semibold' onClick={handleButton}>
              Confirm
            </button>
          </div>
        </ModalDialog>
      </Modal>
    </>
  )
}

export default NextBowler