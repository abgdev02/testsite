import immerseImage from '../../assets/images/immerse.jpeg'
import selectImage from '../../assets/images/select.jpeg'
import journalImage from '../../assets/images/journal.png'

interface HoldMeditateSectionProps {
  isMobile: boolean
}

export function HoldMeditateSection({ isMobile }: HoldMeditateSectionProps) {
  return (
    <div 
      id="hold-meditate-section"
      style={{
        width: '100%',
        maxWidth: '1400px', // Consistent with other sections
        margin: '0 auto', // Center the content
        minHeight: '100vh',        paddingLeft: isMobile ? 20 : 80, // 5rem for desktop consistency
        paddingRight: isMobile ? 20 : 80, // 5rem for desktop consistency
        paddingTop: 80, // Reduced from 160 for better spacing
        paddingBottom: 80, // Reduced from 120 for better spacing
        background: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        boxSizing: 'border-box',
        position: 'relative'
      }}
    >{/* Top Section - Header text positioned on right side (columns 7-12) */}
      <div className={`grid-container ${isMobile ? '' : ''}`} style={{
        width: '100%',
        marginBottom: isMobile ? 60 : 80
      }}>        {/* Empty left columns (1-6) on desktop */}
        <div className="hidden md:block col-6"></div>
        
        {/* Header content on right columns (7-12) or full width on mobile */}
        <div className="col-12 md:col-6" style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 40
        }}><div className="gradient-text-primary" style={{
            fontSize: isMobile ? 32 : 48,
            fontFamily: 'Source Sans Pro',
            fontWeight: '300',
            lineHeight: isMobile ? 1.2 : 1.2,
            wordWrap: 'break-word',
            textAlign: 'left'
          }}>
            All you need to do is hold it and meditate
          </div>
          
          <div style={{
            color: '#8A8A8A',
            fontSize: 16,
            fontFamily: 'Source Sans Pro',
            fontWeight: '300',
            wordWrap: 'break-word',
            textAlign: 'left',
            lineHeight: 1.6
          }}>
            Root responds to your presence with dynamic sensory feedback designed to calm the nervous system. It creates a meditative space that adapts to your body — no screens, just pure immersion.
          </div>
        </div>
      </div>      {/* Bottom Section - Three columns using 12-column grid */}
      <div className={`grid-container ${isMobile ? '' : ''}`} style={{
        width: '100%',
        marginBottom: '120px',
      }}>        {/* Hold Column - Columns 1-4 */}
        <div className="col-12 md:col-4" style={{
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: 40,
          display: 'flex',
          textAlign: 'center'
        }}>
          <div style={{
            color: '#d2d2d2',
            fontSize: 16,
            fontFamily: 'Source Sans Pro',
            fontWeight: '400',
            textTransform: 'uppercase',
            letterSpacing: 1.28,
            wordWrap: 'break-word'
          }}>
            SELECT
          </div>
          <div style={{
            width: isMobile ? 180 : 280,
            height: isMobile ? 180 : 280,
            borderRadius: '50%',
            overflow: 'hidden',
            border: '1px solid #eee'
          }}>
            <img 
              src={selectImage} 
              alt="Select meditation scene"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
          <div style={{
            color: '#8a8a8a',
            fontSize: 16,
            fontFamily: 'Source Sans Pro',
            fontWeight: '400',
            wordWrap: 'break-word',
            lineHeight: 1.5,
            textAlign: 'center'
          }}>
            Choose a scene to begin your session
          </div>
        </div>        {/* Breathe Column - Columns 5-8 */}
        <div className="col-12 md:col-4" style={{
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: 40,
          display: 'flex',
          textAlign: 'center'
        }}>
          <div style={{
            color: '#d2d2d2',
            fontSize: 16,
            fontFamily: 'Source Sans Pro',
            fontWeight: '400',
            textTransform: 'uppercase',
            letterSpacing: 1.28,
            wordWrap: 'break-word'
          }}>
            IMMERSE
          </div>
          <div style={{
            width: isMobile ? 180 : 280,
            height: isMobile ? 180 : 280,
            borderRadius: '50%',
            overflow: 'hidden',
            border: '1px solid #eee'
          }}>
            <img 
              src={immerseImage} 
              alt="Immerse meditation experience"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
          <div style={{
            color: '#8a8a8a',
            fontSize: 16,
            fontFamily: 'Source Sans Pro',
            fontWeight: '400',
            wordWrap: 'break-word',
            lineHeight: 1.5,
            textAlign: 'center'
          }}>
            Feel the immersive view and haptics guide your breath
          </div>
        </div>        {/* Connect Column - Columns 9-12 */}
        <div className="col-12 md:col-4" style={{
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: 40,
          display: 'flex',
          textAlign: 'center'
        }}>
          <div style={{
            color: '#d2d2d2',
            fontSize: 16,
            fontFamily: 'Source Sans Pro',
            fontWeight: '400',
            textTransform: 'uppercase',
            letterSpacing: 1.28,
            wordWrap: 'break-word'
          }}>
            JOURNAL
          </div>
          <div style={{
            width: isMobile ? 180 : 280,
            height: isMobile ? 180 : 280,
            borderRadius: '50%',
            overflow: 'hidden',
            border: '1px solid #eee'
          }}>
            <img 
              src={journalImage} 
              alt="Journal and reflect on meditation"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
          <div style={{
            color: '#8a8a8a',
            fontSize: 16,
            fontFamily: 'Source Sans Pro',
            fontWeight: '400',
            wordWrap: 'break-word',
            lineHeight: 1.5,
            textAlign: 'center'
          }}>
            Reflect and save your thoughts post-session
          </div>
        </div>
      </div>
    </div>
  )
}
